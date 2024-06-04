let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/base/blank.vue") //二级菜单专属

export default {
	path: '/VCharts',
	name: 'VCharts',
	component: layout,
	meta: {
		title: '数据可视化',
		icon: "shezhi1",
	},
	children: [{
			path: 'histogram',
			name: "VCharts-histogram",
			component: blank, //() => import(/* webpackChunkName: "VCharts-histogram" */"@/views/10-vCharts/histogram.vue"),
			meta: {
				title: '柱状图',
				icon: "shezhi1",
			},
			children: [{
					path: 'base',
					name: "VCharts-histogram-base",
					meta: {
						title: '基础',
						icon: "shezhi1",
					},
					component: () => import( /* webpackChunkName: "VCharts-histogram-base" */ "@/views/10-vCharts/1-histogram/1-base.vue"),
				},
				{
					path: 'metrics',
					name: "VCharts-histogram-metrics",
					meta: {
						title: '设置显示的指标维度',
						icon: "shezhi1",
					},
					component: () => import( /* webpackChunkName: "VCharts-histogram-metrics" */ "@/views/10-vCharts/1-histogram/2-metrics.vue"),
				},
				{
					path: 'axisSite',
					name: "VCharts-histogram-axisSite",
					meta: {
						title: '设置左右y轴',
						icon: "shezhi1",
					},
					component: () => import( /* webpackChunkName: "VCharts-histogram-axisSite" */ "@/views/10-vCharts/1-histogram/3-axisSite.vue"),
				},
				// {
				// 	path: 'xdeg',
				// 	name: "VCharts-histogram-xdeg",
				// 	meta: {
				// 		title: '设置x轴刻度的倾斜',
				// 		icon: "shezhi1",
				// 	},
				// 	component: () => import(/* webpackChunkName: "VCharts-histogram-xdeg" */"@/views/10-vCharts/1-histogram/xdeg.vue"),
				// },
				{
					path: 'stack',
					name: "VCharts-histogram-stack",
					meta: {
						title: '堆叠面积图',
						icon: "shezhi1",
					},
					component: () => import( /* webpackChunkName: "VCharts-histogram-stack" */ "@/views/10-vCharts/1-histogram/4-stack.vue"),
				},
				{
					path: 'alias',
					name: "VCharts-histogram-alias",
					meta: {
						title: '设置别名',
						icon: "shezhi1",
					},
					component: () => import( /* webpackChunkName: "VCharts-histogram-alias" */ "@/views/10-vCharts/1-histogram/5-alias.vue"),
				},
				{
					path: 'shouNum',
					name: "VCharts-histogram-shouNum",
					meta: {
						title: '在柱状图上显示指标数值',
						icon: "shezhi1",
					},
					component: () => import( /* webpackChunkName: "VCharts-histogram-shouNum" */ "@/views/10-vCharts/1-histogram/6-shouNum.vue"),
				},
				{
					path: 'xAxisTyp',
					name: "VCharts-histogram-xAxisTyp",
					meta: {
						title: '设置X轴为连续的数值轴',
						icon: "shezhi1",
					},
					component: () => import( /* webpackChunkName: "VCharts-histogram-xAxisTyp" */ "@/views/10-vCharts/1-histogram/7-xAxisTyp.vue"),
				},
				{
					path: 'addLine',
					name: "VCharts-histogram-addLine",
					meta: {
						title: '柱状图+折线图',
						icon: "shezhi1",
					},
					component: () => import( /* webpackChunkName: "VCharts-histogram-addLine" */ "@/views/10-vCharts/1-histogram/8-addLine.vue"),
				},
				{
					path: 'fn',
					name: "VCharts-histogram-fn",
					meta: {
						title: '解决x轴过长',
						icon: "shezhi1",
					},
					component: () => import( /* webpackChunkName: "VCharts-histogram-fn" */ "@/views/10-vCharts/1-histogram/9-fn.vue"),
				},
				{
					path: 'extend',
					name: "VCharts-histogram-extend",
					meta: {
						title: 'extend',
						icon: "shezhi1",
					},
					component: () => import( /* webpackChunkName: "VCharts-histogram-extend" */ "@/views/10-vCharts/1-histogram/10-extend.vue"),
				},
				{
					path: 'self',
					name: "VCharts-histogram-self",
					meta: {
						title: '自定义配置',
						icon: "shezhi1",
					},
					component: () => import( /* webpackChunkName: "VCharts-histogram-self" */ "@/views/10-vCharts/1-histogram/11-self.vue"),
				},
				{
					path: 'other',
					name: "VCharts-histogram-other",
					component: blank, //() => import(/* webpackChunkName: "VCharts-Pie" */"@/views/10-vCharts/pie.vue"),
					meta: {
						title: '其他的',
						icon: "shezhi1",
					},
					children: [{
							path: 'one',
							name: "VCharts-histogram-other-one",
							meta: {
								title: '同指标不同颜色',
								icon: "shezhi1",
							},
							component: () => import( /* webpackChunkName: "VCharts-histogram-other-one" */ "@/views/10-vCharts/1-histogram/other/1-one.vue"),
						},
						{
							path: 'two',
							name: "VCharts-histogram-other-two",
							meta: {
								title: '不同指标不同颜色',
								icon: "shezhi1",
							},
							component: () => import( /* webpackChunkName: "VCharts-histogram-other-two" */ "@/views/10-vCharts/1-histogram/other/2-two.vue"),
						},
						{
							path: 'three',
							name: "VCharts-histogram-other-three",
							meta: {
								title: '图例背景色',
								icon: "shezhi1",
							},
							component: () => import( /* webpackChunkName: "VCharts-histogram-other-three" */ "@/views/10-vCharts/1-histogram/other/3-three.vue"),
						},
						{
							path: 'four',
							name: "VCharts-histogram-other-four",
							meta: {
								title: '整个图盘的背景色',
								icon: "shezhi1",
							},
							component: () => import( /* webpackChunkName: "VCharts-histogram-other-four" */ "@/views/10-vCharts/1-histogram/other/4-four.vue"),
						},
						{
							path: 'five',
							name: "VCharts-histogram-other-five",
							meta: {
								title: 'x轴数值倾斜',
								icon: "shezhi1",
							},
							component: () => import( /* webpackChunkName: "VCharts-histogram-other-five" */ "@/views/10-vCharts/1-histogram/other/5-five.vue"),
						},
						{
							path: 'six',
							name: "VCharts-histogram-other-six",
							meta: {
								title: '不显示y轴第二个指标的网格线',
								icon: "shezhi1",
							},
							component: () => import( /* webpackChunkName: "VCharts-histogram-other-six" */ "@/views/10-vCharts/1-histogram/other/6-six.vue"),
						},
						{
							path: 'seven',
							name: "VCharts-histogram-other-seven",
							meta: {
								title: 'y轴的最小值与最大值',
								icon: "shezhi1",
							},
							component: () => import( /* webpackChunkName: "VCharts-histogram-other-seven" */ "@/views/10-vCharts/1-histogram/other/7-seven.vue"),
						},
						{
							path: 'dataZoom',
							name: "VCharts-histogram-other-dataZoom",
							meta: {
								title: "缩放",
								icon: "shezhi1",
							},
							component: () => import( /* webpackChunkName: "VCharts-histogram-other-seven" */ "@/views/10-vCharts/1-histogram/other/8-dataZoom.vue"),
						},
						{
							path: 'tooltip',
							name: "VCharts-histogram-other-tooltip",
							meta: {
								title: "tooltip",
								icon: "shezhi1",
							},
							component: () => import( /* webpackChunkName: "VCharts-histogram-other-seven" */ "@/views/10-vCharts/1-histogram/other/9-tooltip.vue"),
						},
						{
							path: 'minInterval',
							name: "VCharts-histogram-other-minInterval",
							meta: {
								title: "纵坐标为整数",
								icon: "shezhi1",
							},
							component: () => import( /* webpackChunkName: "VCharts-histogram-other-seven" */ "@/views/10-vCharts/1-histogram/other/10-minInterval.vue"),
						},
						{
							path: 'barwidth',
							name: "VCharts-histogram-other-barwidth",
							meta: {
								title: "barwidth",
								icon: "shezhi1",
							},
							component: () => import( /* webpackChunkName: "VCharts-histogram-other-seven" */ "@/views/10-vCharts/1-histogram/other/11-barwidth.vue"),
						},
					]
				}
			],
		},
		{
			path: 'base',
			name: "VCharts-line",
			component: blank, //() => import(/* webpackChunkName: "VCharts-base" */"@/views/10-vCharts/line.vue"),
			meta: {
				title: '折线图',
				icon: 'e79a',
			},
			children: [{
				path: 'base',
				name: "VCharts-line-base",
				meta: {
					title: '折线-基础',
					icon: "shezhi1",
				},
				component: () => import( /* webpackChunkName: "VCharts-line-base" */ "@/views/10-vCharts/2-line/1-base.vue"),
			}]
		},
		{
			path: 'pie',
			name: "VCharts-pie",
			component: blank, //() => import(/* webpackChunkName: "VCharts-Pie" */"@/views/10-vCharts/pie.vue"),
			meta: {
				title: '饼图',
				icon: "shezhi1",
			},
			children: [{
					path: 'base',
					name: "VCharts-pie-base",
					meta: {
						title: '基础',
						icon: "shezhi1",
					},
					component: () => import( /* webpackChunkName: "VCharts-pie-base" */ "@/views/10-vCharts/3-pie/1-base.vue"),
				},
				{
					path: 'autoAnimation',
					name: "VCharts-pie-auto-animation",
					meta: {
						title: '饼图自动切换动画',
						icon: "shezhi1",
					},
					component: () => import( /* webpackChunkName: "VCharts-pie-auto-animation" */ "@/views/10-vCharts/3-pie/2-auto-animation.vue"),
				},
				{
					path: 'radiusAndCenter',
					name: "VCharts-pie-auto-radiusAndCenter",
					meta: {
						title: '饼图半径和center',
						icon: "shezhi1",
					},
					component: () => import( /* webpackChunkName: "VCharts-pie-auto-radiusAndCenter" */ "@/views/10-vCharts/3-pie/3-radiusAndCenter.vue"),
				},
				{
					path: '4-legend',
					name: "VCharts-pie-auto-4-legend",
					meta: {
						title: '饼图-legend',
						icon: "shezhi1",
					},
					component: () => import( /* webpackChunkName: "VCharts-pie-auto-4-legend" */ "@/views/10-vCharts/3-pie/4-legend.vue"),
				},
				{
					path: '5-label',
					name: "VCharts-pie-auto-5-label",
					meta: {
						title: '饼图-label',
						icon: "shezhi1",
					},
					component: () => import( /* webpackChunkName: "VCharts-pie-auto-5-label" */ "@/views/10-vCharts/3-pie/5-label.vue"),
				}
			]
		},

	]
}
