<template>
  <div>
    <el-button type="primary" @click="copy">点击复制</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    copy() {
      let copyText = "测试"
      const input = document.createElement('input')
      document.body.appendChild(input)
      input.setAttribute('value', copyText)
      input.select()
      if (document.execCommand('copy')) {
        document.execCommand('copy')
      }
      document.body.removeChild(input)
      this.$message.success('复制成功')
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
