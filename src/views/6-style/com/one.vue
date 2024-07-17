<template>
  <div>
    <div class="father">
      <div class="son1"></div>
      <div class="son2"></div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.father{
  height: 500px;
  background-color: black;
  display: flex;
  .son1{
    width: 200px;
    background-color: red;
  }
  .son2{
    flex-grow:1;
    background-color: green;
  }
}
</style>
