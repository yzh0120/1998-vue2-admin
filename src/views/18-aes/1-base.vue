<template>
  <div>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-button type="primary" size="default" @click="ggg">加密</el-button>
    <el-button type="primary" size="default" @click="ggg2">解密</el-button>
    <div>加密:{{ a1 }}</div>
    <div>解密:{{ a2 }}</div>
  </div>
</template>

<script>
import aes from "@/utils/aes"
export default {
  data() { 
    return {
      input:"",
      a1: "",
      a2: "",
      obj:{
        name: "殷洲",
        age:18
      },
    }
  },
    methods:{
      ggg() {
        this.a1 = aes.encrypt(JSON.stringify(this.obj)) //aes.encrypt(JSON.stringify(this.input))
      },
      ggg2() { 
        console.log(aes.decrypt(this.a1),"123")
        this.a2 = JSON.parse(aes.decrypt(this.a1)) //aes.decrypt(this.input)
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>
