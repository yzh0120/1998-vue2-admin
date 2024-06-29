<template>
  <div>
    <pageTable :arr="arr" v-if="show"></pageTable>
  </div>
</template>

<script>
import pageTable from "@/views/2-vxe-table/com/pageTable"
  export default {
  components: {
    pageTable
  },
  data() { 
    return {
      show: false,
      arr:[],
    }
  },
  mounted() {
    for (let i = 1; i <= 100; i++) { 
      this.arr.push({no:i})
    }
    this.show = true
  },
  }
</script>

<style lang="scss" scoped>

</style>
