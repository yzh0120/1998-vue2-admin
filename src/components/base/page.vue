<template>
  <div :class="isTest?`isTest`:``">
    <slot></slot>
  </div>
</template>

<script>

export default {
  props: {
    isTest: {
      type: Boolean,
      default: false
    },
  },
}
</script>

<style lang="scss" scoped>
.isTest{
  height: 80vh;
  padding: 50px;
}
</style>
