<template>
  <div>
    <!-- https://gitee.com/brightstarlcg/vue-puzzle-verification -->
   
    <div style="height: 500px;border: 1px solid green;">
    
      1231231231 1231231231 1231231231 1231231231 1231231231 1231231231 1231231231 1231231231 1231231231 1231231231
    </div>
  

    <el-button type="primary" size="default" @click="()=>{isVerificationShow1 = !isVerificationShow1}">切换</el-button>
    <puzzle-verification 
    v-model="isVerificationShow1" 
    :onSuccess="onSuccess" 
    :puzzleImgList="puzzleImgList"
    blockType="puzzle"
      class="puzzle_verification" />
  </div>
</template>

<script>
  export default {

  data() { 
    return {
      isVerificationShow1:false,
      puzzleImgList: [require("@/assets/banner/1.png")],
    }
  },
  methods: {
    onSuccess() { 

    }
  },
  }
</script>

<style lang="scss" scoped>
.puzzle_verification {
  position: fixed !important;
  z-index: 99999999;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
