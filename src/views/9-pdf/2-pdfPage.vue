<template>
  <div>
      <!-- 

解决vuepdf不显示章印问题   //pdf预览不显示红章问题
找到 node_modules/pdfjs-dist/es5/build/pdf.worker.js 这个目录
if (data.fieldType === "Sig") {
      // data.fieldValue = null;  //有些文章注释了
      
      // _this3.setFlags(_util.AnnotationFlag.HIDDEN);//将这一行注释掉
}

   -->
    <pdfPage></pdfPage>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>
