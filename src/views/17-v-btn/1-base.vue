<template>
  <div>
    <el-button type="primary"  v-btn:detail="btnArr" >审核</el-button>
  </div>
</template>

<script>
  export default {
  data() { 
    return {
      btnPower: true,
      btnArr:[],
    }
  },
  mounted() { 
    setTimeout(() => { 
      this.btnArr = [
        {
          enCode:"detail-"
        }
      ]
    },1000)
  },
  }
</script>

<style lang="scss" scoped>

</style>
