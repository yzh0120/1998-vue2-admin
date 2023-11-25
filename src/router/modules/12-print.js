let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/base/blank.vue")//二级菜单专属


export default { 
    path: '/print',//修改
    name: 'print',//修改
    component:  layout,
	meta:{
		title: "打印",
		icon: "shezhi1"
	},
    children: [
        {
            path: 'one',//修改
            name: 'print-one',//修改
            component: () => import(/* webpackChunkName: "print-one" */ "@/views/12-print/1-one.vue"),//修改
            meta: {
                title: '打印单个',//修改
                icon: "shezhi1"
            }
        },
        {
            path: 'more',//修改
            name: 'print-more',//修改
            component: () => import(/* webpackChunkName: "print-more" */ "@/views/12-print/2-more.vue"),//修改
            meta: {
                title: '打印多个',//修改
                icon: "shezhi1"
            }
        }
    ]
}
