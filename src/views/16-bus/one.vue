<template>
  <div>
    <el-button type="primary" @click="click1">发送事件</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    click1() { 
      this.$bus.$emit('busEvent1', 0)
    },
  },
}
</script>

<style lang="scss" scoped></style>
