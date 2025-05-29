<template>
    <div>
        <el-button type="primary" @click="get">获取data</el-button>
        <el-button type="primary" @click="setList2">替换整个list</el-button>
        <el-button type="primary" @click="setList3">增加list的尾部</el-button>
        <base-form :data="form" ref="form">
    
        </base-form>
    </div>
</template>

<script>
    export default {
        data(){
            let self = this
            return {
                form: {
                    span:true,
                    list:[
                    {
                            type: "input",
                            field: "input0",
                            // labelTip: "若为长期，可不填",
                            title: "普通输入框0",
                            rules: [
                                { required: true, message: "请输入" },
                                { validator: self.$validator.numberpoint },
                            ]
                        },
                        {
                            type: "input",
                            field: "input1",
                            // labelTip: "若为长期，可不填",
                            title: "普通输入框1",
                            rules: [
                                { required: true, message: "请输入" },
                                { validator: self.$validator.numberpoint },
                            ]
                        }
                    ],
                    data:{},
                    titleWidth: "200px",
                },
            }
        },
        methods:{
            get(){
                console.log(this.form.data)
            },
            setList2(){
                let self = this
                this.form.list = [
                {
                    type: "input",
                    field: "input2",
                    // labelTip: "若为长期，可不填",
                    title: "普通输入框2",
                    rules: [
                        { required: true, message: "请输入" },
                        { validator: self.$validator.numberpoint },
                    ]
                }
                ]
            },
            setList3(){
                let self = this
                this.form.list.push(
                    {
                        type: "input",
                        field: "input3",
                        // labelTip: "若为长期，可不填",
                        title: "普通输入框3",
                        rules: [
                            { required: true, message: "请输入" },
                            { validator: self.$validator.numberpoint },
                        ]
                    }
                )
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>