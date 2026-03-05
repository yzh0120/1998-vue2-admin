<template>
  <!-- 

解决vuepdf不显示章印问题
找到 node_modules/pdfjs-dist/es5/build/pdf.worker.js 这个目录
if (data.fieldType === "Sig") {
      data.fieldValue = null;
        //pdf预览不显示红章问题
      // _this3.setFlags(_util.AnnotationFlag.HIDDEN);//将这一行注释掉
}

   -->
  <div class="pdfBox">
    <!-- <pdf ref="morePDF" :src="pdfSrc" ></pdf> -->
    <pdf ref="morePDF" :src="pdfSrc" :page="i" v-for="i in numPages" :key="i"></pdf>
  </div>
</template>

<script>
import pdf from 'vue-pdf'
import CMapReaderFactory from 'vue-pdf/src/CMapReaderFactory.js';
import axios from 'axios';
import * as eleFileApi from "@/api/eleFile"
export default {
  components: {
    pdf
  },
  props: {
    fileId: {
      type: [String, Number]
    },
    preUrl: {
      type: String,
      default: "https://testfile.mxhsz.com/202603/0266da299802ac1a1fccda8b60c00001/服务协议_1772699121212.pdf"
    },
  },
  data() {
    return {
      pdfSrc: "",
      currentPage: 1,//当前页
      numPages: 0,//总数
    }
  },
  mounted() {
    //  this.download({ fileId: "1691994924131065857" })
    this.download()
  },
  methods: {
    download() {
      // this.pdfSrc = this.preUrl
      // return 
      const x = new window.XMLHttpRequest();
      x.open('GET', this.preUrl, true);
      x.responseType = 'blob';
      x.onload = () => {

        // let time = new Date().toLocaleDateString();
        const fileURL = window.URL.createObjectURL(x.response);
        this.pdfSrc = fileURL
        this.getPDFnums(this.pdfSrc)

      };
      x.send()
      return;
      let data = {
      }
      let headers = {}
      axios({
        method: 'get',
        url: "/oa/turn/complex/face/openInvitation",
        baseURL: process.env.VUE_APP_API,
        params: data,
        responseType: 'blob',
        headers: headers
      })
        .then(response => {
          var blob = new Blob([response.data], { type: 'application/pdf' })
          let pdfSrc = URL.createObjectURL(blob);
          this.getPDFnums(pdfSrc)
        })
        .catch(err => {
          reject(err)
        })

    },
    //计算pdf页码总数
    getPDFnums(url) {
      let loadURL = pdf.createLoadingTask({
        url: url,//你的pdf地址
        CMapReaderFactory
      })
      loadURL.promise.then(pdf => {
        this.numPages = pdf.numPages
        this.currentPage = 1
      }).catch(err => {

      })
    },
  }
}
</script>

<style lang="scss" scoped>
</style>
