<template>
	<div>
		<div class="panel" :class="addType">
			<!-- 头部 -->
			<div :class="[`panel-heading`]" @click="bodyHandle" :style="{ fontSize: sizeComputed }">

				<div :class="type == `mxh` ? `shu` : ``">
					<div v-if="head">{{ head }}{{ header }}</div>
					<slot name="head"></slot>
					<slot name="header"></slot>
				</div>

			</div>
			<!-- 身体 -->
			<div v-if="isOne && firstNotShow">
				<div class="panel-body" v-if="showBody" :style="{ padding: `15px` }">
					<slot></slot>
				</div>
			</div>
			<div v-else class="panel-body" v-show="showBody" :style="{ padding: `15px` }">
				<slot></slot>
			</div>
		</div>
	</div>
</template>
<!-- 
	default 
	primary
	success
	info
	warning
	danger
	 -->
<script>
export default {
	props: {
		head: String,
		header: String,
		type: {
			type: String,
			default: "default"
		},
		close: {
			default: false
		},
		//这个是即使close 也是渲染body里面的组件
		firstNotShow: {
			default: true
		},
		size: {
			type: String,
			default: ""
		}
	},
	computed: {
		isOne() {
			if (this.count < 1) {
				return true
			} else {
				return false
			}
		},
		addType() {
			return "panel-" + this.type
		},
		sizeComputed() {
			let size = this.size
			if (size == "h1") {
				return "32px"
			} else if (size == "h2") {
				return "24px"
			} else if (size == "h3") {
				return "18.72px"
			}
		},
	},
	data() {
		return {
			showBody: false,
			height: "0px",
			count: 0,//展开次数
		};
	},
	watch: {
		"close": {
			handler() {
				setTimeout(() => {
					this.showBody = !this.close
					if (this.showBody) {
						this.count++
					}
				}, 0)
			},
		},
	},
	mounted() {
		if (this.close) {
			setTimeout(() => {
				this.showBody = false
			}, 0)
		} else {
			setTimeout(() => {
				this.showBody = true
				this.count++
			}, 0)
		}
	},
	methods: {
		bodyHandle() {
			if (!this.listenTo) {
				setTimeout(() => {
					this.showBody = !this.showBody;
					if (this.showBody) {
						this.count++
					}
					console.log(this.showBody)
				}, 0)

			}
		}

	}
};
</script>

<style scoped lang="scss">
$fanwei: 5px;

.panel {
	margin-bottom: 20px;
	background-color: #fff;
	border: 1px solid transparent;
	border-radius: 4px;
	// -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
	//   box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);

	////////////////////////////////////////////////
	&.panel-default {
		border-color: #ddd;

		// box-shadow: #ddd 0px 0px $fanwei;
		>.panel-heading {
			color: #333;
			background-color: #f5f5f5;
			border-color: #ddd;
		}
	}
////////////////////////////////////////////////
	&.panel-primary {
		border-color: #337ab7;

		// box-shadow: #337ab7 0px 0px $fanwei;
		>.panel-heading {
			color: #fff;
			background-color: #337ab7;
			border-color: #337ab7;
		}
	}
////////////////////////////////////////////////
	&.panel-success {
		border-color: #d6e9c6;

		// box-shadow: #d6e9c6 0px 0px $fanwei;
		>.panel-heading {
			color: #3c763d;
			background-color: #dff0d8;
			border-color: #d6e9c6;
		}
	}
////////////////////////////////////////////////
	&.panel-info {
		border-color: #bce8f1;

		// box-shadow: #bce8f1 0px 0px $fanwei;
		>.panel-heading {
			color: #31708f;
			background-color: #d9edf7;
			border-color: #bce8f1;
		}
	}
////////////////////////////////////////////////
	&.panel-warning {
		border-color: #faebcc;

		// box-shadow: #faebcc 0px 0px $fanwei;
		>.panel-heading {
			color: #8a6d3b;
			background-color: #fcf8e3;
			border-color: #faebcc;
		}
	}
////////////////////////////////////////////////
	&.panel-danger {
		border-color: #ebccd1;

		// box-shadow: #ebccd1 0px 0px $fanwei;
		>.panel-heading {
			color: #a94442;
			background-color: #f2dede;
			border-color: #ebccd1;
		}
	}

	////////////////////////////////////////////////
	&.panel-mxh {
		border-color: #ddd;

		// box-shadow: #ddd 0px 0px $fanwei;
		>.panel-heading {
			color: #333;
			background-color: #f5f5f5;
			border-color: #ddd;
		}
	}

	////////////////////////////////////////////////
	.panel-heading {
		padding: 10px 15px;
		border-bottom: 1px solid transparent;
		border-top-left-radius: 3px;
		border-top-right-radius: 3px;

		// display: flex;
		// justify-content: space-between;
	}

	.panel-body {
		overflow: hidden;
		transition: all .2s;
	}
}

.shu {
	padding-left: 10px;
	position: relative;

	// width:10px;
	// height:10px;
	// background-color: #F6384C;
	&::before {
		content: "";
		display: inline-block;
		position: absolute;
		width: 4px;
		height: 100%;
		left: -4px;
		background-color: #F6384C;
	}
}
</style>
