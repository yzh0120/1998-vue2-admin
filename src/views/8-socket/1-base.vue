<template>
  <div>
    <el-button type="primary" size="default" @click="doo">提醒后台发送socket</el-button>
    
  </div>
</template>

<script>
import * as testApi from "@/api/test";
  export default {
  data() { 
      return {
        
      }
  },
  methods: {
    doo() {
      testApi.socket().then(() => { 

      })
     },
  },
  }
</script>

<style lang="scss" scoped>

</style>
