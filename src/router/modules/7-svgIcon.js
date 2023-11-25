let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/base/blank.vue") //二级菜单专属

export default {
    path: '/svgIcon',
    name: 'svgIcon',
    component: layout,
    meta: {
        title: 'svg图标',
        icon: "shezhi1",
    },
    children: [{
        path: 'base',
        name: 'svgIcon-base',
        component: () => import( /* webpackChunkName: "svgIcon-base" */ "@/views/7-svgIcon/1-base-svgIcon.vue"),
        meta: {
            title: 'svg图标',
            icon: "shezhi1",
        }
    }, ]
}
