let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/base/blank.vue") //二级菜单专属
export default {
    path: '/baseForm',
    name: 'baseForm',
    component: layout,
    meta: {
        title: '封装el-form',
        icon: "shezhi1",
    },
    children: [{
            path: 'base',
            name: 'baseForm-base',
            component: () => import( /* webpackChunkName: "1-base-form" */ "@/views/1-base-form/1-base-form.vue"),
            meta: {
                title: '基础表单',
                icon: "shezhi1",
            }
        },
        {
            path: 'row',
            name: 'baseForm-row',
            component: () => import( /* webpackChunkName: "2-row-form" */ "@/views/1-base-form/2-row-form.vue"),
            meta: {
                title: '响应式表单',
                icon: "shezhi1",
            }
        },
        {
            path: 'span',
            name: 'baseForm-span',
            component: () => import( /* webpackChunkName: "3-span-form" */ "@/views/1-base-form/3-span-form.vue"),
            meta: {
                title: 'span表单',
                icon: "shezhi1",
            }
        },
        {
            path: 'slot',
            name: 'baseForm-slot',
            component: () => import( /* webpackChunkName: "4-slot-form" */ "@/views/1-base-form/4-slot-form.vue"),
            meta: {
                title: '含有插槽的表单',
                icon: "shezhi1",
            }
        },
        {
            path: 'link',
            name: 'baseForm-link',
            component: () => import( /* webpackChunkName: "5-link-form" */ "@/views/1-base-form/5-link-form.vue"),
            meta: {
                title: '条件联动表单',
                icon: "shezhi1",
            }
        },
        {
            path: 'over',
            name: 'baseForm-over',
            component: () => import( /* webpackChunkName: "6-baseForm-over" */ "@/views/1-base-form/6-over-form.vue"),
            meta: {
                title: '表单内容悬浮显示',
                icon: "shezhi1",
            }
        },
        {
            path: 'inline',
            name: 'baseForm-inline',
            component: () => import( /* webpackChunkName: "7-inline-form" */ "@/views/1-base-form/7-inline-form.vue"),
            meta: {
                title: '行内表单',
                icon: "shezhi1",
            }
        },
        {
            path: 'checkbox',
            name: 'baseForm-checkbox',
            component: () => import( /* webpackChunkName: "8-checkbox-form" */ "@/views/1-base-form/8-checkbox-form.vue"),
            meta: {
                title: '复选框显示隐藏表单',
                icon: "shezhi1",
            }
        },
        {
            path: 'dynamicValidateForm',
            name: 'baseForm-dynamicValidateForm',
            component: () => import( /* webpackChunkName: "9-dynamicValidateForm-form" */ "@/views/1-base-form/9-dynamicValidateForm-form.vue"),
            meta: {
                title: '动态表单',
                icon: "shezhi1",
            }
        },
        {
            path: 'formToTable',
            name: 'baseForm-formToTable',
            component: () => import( /* webpackChunkName: "10-formToTable-form" */ "@/views/1-base-form/10-formToTable-form.vue"),
            meta: {
                title: 'table中的form',
                icon: "shezhi1",
            }
        },
        {
            path: 'checkIf',
            name: 'baseForm-checkIf',
            component: () => import( /* webpackChunkName: "11-checkIf" */ "@/views/1-base-form/11-checkIf.vue"),
            meta: {
                title: 'checkIf',
                icon: "shezhi1",
            }
        },
    ]
}
