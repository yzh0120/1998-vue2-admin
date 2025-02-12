let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/base/blank.vue")//二级菜单专属

export default { 
    path: '/element-ui',
    name: 'element-ui',
    component:  layout,
    meta: {
        title: 'element-ui',
        icon: "shezhi1",
    },
    children: [
        {
            path: 'checkBox',
            name: 'element-ui-checkBox',
            component: () => import(/* webpackChunkName: "checkBox" */ "@/views/11-element-ui/1-checkBox.vue"),
            meta: {
                title: '复选框',
                icon: "shezhi1",
            }
        },
        {
            path: 'elTree',
            name: 'element-ui-checkBox',
            component: blank,
            meta: {
                title: '树形结构',
                icon: "shezhi1",
            },
            children: [
                {
                    path: 'base',
                    name: 'element-ui-checkBox-base',
                    component: () => import(/* webpackChunkName: "element-ui-checkBox-base" */ "@/views/11-element-ui/2-elTree/1-base.vue"),
                    meta: {
                        title: '基础树形结构',
                        icon: "shezhi1",
                    }
                }, 
                {
                    path: 'checkBox',
                    name: 'element-ui-checkBox-checkBox',
                    component: () => import(/* webpackChunkName: "element-ui-checkBox-checkBox" */ "@/views/11-element-ui/2-elTree/2-checkBox.vue"),
                    meta: {
                        title: '复选框树形结构',
                        icon: "shezhi1",
                    }
                },
                {
                    path: 'loading',
                    name: 'element-ui-checkBox-loading',
                    component: () => import(/* webpackChunkName: "element-ui-checkBox-loading" */ "@/views/11-element-ui/2-elTree/3-loading.vue"),
                    meta: {
                        title: '加载的树形结构',
                        icon: "shezhi1",
                    }
                },
            ]
        },
        {
            path: 'elTabs',
            name: 'element-ui-tip',
            component: blank,
            meta: {
                title: 'tabs',
                icon: "shezhi1",
            },
            children: [
                {
                    path: 'base',
                    name: 'element-ui-elTabs-base',
                    component: () => import(/* webpackChunkName: "element-ui-elTabs-base" */ "@/views/11-element-ui/3-elTabs/1-average.vue"),
                    meta: {
                        title: '平均分配加下拉提示框',
                        icon: "shezhi1",
                    }
                }, 
            ]
        },
        {
            path: 'radio',
            name: 'element-ui-radio',
            component: () => import(/* webpackChunkName: "radio" */ "@/views/11-element-ui/4-radio.vue"),
            meta: {
                title: '单选框',
                icon: "shezhi1",
            }
        },
        {
            path: 'radio-2',
            name: 'element-ui-radio-2',
            component: () => import(/* webpackChunkName: "radio" */ "@/views/11-element-ui/5-radio.vue"),
            meta: {
                title: '单选框2',
                icon: "shezhi1",
            }
        },

    ]
}
