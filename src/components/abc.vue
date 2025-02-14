<template>
    <div style="display: flex;" :class="shu ? `shu` : ``">
        <i class="el-icon-edit"></i>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            shu:{
                type:Boolean,
                default: false
            },
            icon:{
                type:String,
                default: ""
            }
        }
    }
</script>

<style lang="scss" scoped>
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