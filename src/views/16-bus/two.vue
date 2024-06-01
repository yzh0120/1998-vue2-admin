<template>
  <div>

  </div>
</template>

<script>
export default {
  mounted() {
    this.$bus.$on('busEvent1', val => {
      this.updateFm()
    })
  },
  methods: {
    updateFm() {
      alert(1)
    },
  },
  beforeDestroy() {
    this.$bus.$off('busEvent1')
  },
}
</script>

<style lang="scss" scoped></style>
