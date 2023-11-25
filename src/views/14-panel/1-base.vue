<template>
  <div>
    <!-- <panel type="mxh" :close="close">
      <div slot="header">
        mxh
      </div>
    </panel> -->

    <panel type="primary"  :close="close">
      <div slot="header">
        primary
      </div>
    </panel>

    <panel type="success" :close="true">
      <div slot="header">
        success
      </div>
    </panel>

    <panel type="info">
      <div slot="header">
        info
      </div>
    </panel>

    <panel type="warning">
      <div slot="header">
        warning
      </div>
    </panel>

    <panel type="danger">
      <div slot="header">
        danger
      </div>
    </panel>

    <panel type="default">
      <div slot="header">
        default
      </div>
    </panel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      close: false
    }
  },
  mounted() { 
    setTimeout(() => {
      this.close = !this.close
      console.log(this.close,"close")
    }, 1000 * 2);
  },
}
</script>

<style lang="scss" scoped>
</style>
