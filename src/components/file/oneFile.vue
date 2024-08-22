<template>
  <!-- 
    自定义路径
<oneFile  pathUrl="/face/project/import" style="display: inline-block;margin-left: 20px;"></oneFile>


fileId 文件id需要传给后台

现在用这个感觉方便点缺点是只能获取一个文件
<oneFile mode="getFileById"    :fileId="oneFormAlert.data.currentFileId" 
:uploadObj="uploadObj" ></oneFile>

可以获取多个
 <oneFile  mode="noFolderId" :projectId="formInfoAlert.data.id" :fileId="formInfoAlert.data.fileId" 
:uploadObj="uploadObj" ></oneFile>
   -->
  <span>
    <span style="font-size: 14px; color:red" v-if="!percentage && btnDisabled">服务器正在处理中,请稍后</span>

    <el-progress :percentage="percentage" :text-inside="true" :stroke-width="15" v-if="percentage"></el-progress>
    <!-- :on-progress="progress" 自定义的上次 on-progress失效 -->
    <el-upload :disabled="btnDisabled" class="i-upload" :action="uploaduUrl" :http-request="changeFile"
      :show-file-list="false" multiple :on-change="handleChange">
      <el-button :disabled="btnDisabled" :size="btnSize" :type="btnType">{{ btnText }}
      </el-button>
    </el-upload>


  </span>
</template>

<script>
import * as eleFileApi from "@/api/eleFile";
import axios from 'axios';
// import {
//   getCookie
// } from '@/utils/auth.js';
import * as cookieFn from '@/utils/cookie.js';
export default {
  props: {
    fdata: {
      type: Object,
      default: () => {

      }
    },
    //如果是true  这个组件不需要调用接口
    noGetApi: {
      type: Boolean,
      default: false
    },
    //
    selfClass: {
      type: String,
      default: true,
    },
    //模式
    mode: {
      type: String,
      default: "",
    },
    //项目的文件id
    fileId: {
      type: [String, Number],
      default: "",
    },
    //项目id
    projectId: {
      type: [String, Number],
      default: "",
    },
    //文件对象信息
    uploadObj: {
      type: Object,
      default: () => {
        return {};
      },
    },
    //上传路径可选
    pathUrl: {
      type: String,
      default: "",
    },
    //按钮名称
    btnText: {
      type: String,
      default: "上传资料",
    },
    //按钮大小
    btnSize: {
      type: String,
      default: "mini",
    },
    //文件按钮颜色
    btnType: {
      type: String,
      default: "primary",
    }
  },
  data() {
    return {
      currentNum: 0,//控制上传数量
      percentage: 0,//控制进度条
      uploaduUrl: "", // 没用但是组件需要
      btnDisabled: false,
    };
  },
  mounted() {
    if (this.noGetApi) {

    }
    else if (this.mode == "getFileById") {
      this.getById()
    }
    else {//包含 noFolderId 模式
      this.getFiles(); //获取历史文件///////////////////切换
    }

  },
  computed: {
    folderId() {
      if (this.uploadObj.projectId) {
        return this.uploadObj.projectId
      } else {
        return this.projectId
      }
    },
  },
  methods: {
    //通过文件id获取单个文件
    getById(fileId) {
      if (this.fileId) {
        eleFileApi.getById({ id: fileId ? fileId : this.fileId }).then((res) => {
          if (res.code == 200) {
            this.uploadObj.detail = [res.data]
          } else {
            this.$message.error(res.msg);
          }
        })
      }

    },
    ///////////////////切换
    //通过taskName获取文件
    getFiles() {
      if (this.folderId || this.selfClass) {
        eleFileApi.queryList(
          {
            companyName: this.selfClass,
            folderId: this.folderId,
            taskName: this.uploadObj.taskName,
          }
        ).then((res) => {
          if (res.code == 200) {
            this.$emit("getFile", { data: res.data })
            this.uploadObj.detail = res.data;
            ////////////////////////////////////////////////
            if (this.mode == "noFolderId") {
              if (!this.fileId) {
                this.uploadObj.detail = []
                return this.$message.error("文件id是空！")
              }
              let activeFile = res.data.find((e) => {
                return e.id == this.fileId
              })
              if (activeFile) {
                this.uploadObj.detail = [activeFile]
              }
            }
            ////////////////////////////////////////////////
          } else {
            this.$message.error(res.msg);
          }
        })
      }
    },

    //1 点击上传文件时的改变事件
    handleChange() {
      console.log("文件改变事件")
      this.btnDisabled = !this.btnDisabled;
      //this.fdata.btnDisabled = !this.fdata.btnDisabled;
    },
    //2 取消默认上传事件
    changeFile(file) { //
      console.log("自定义上传事件")
      let url = "/system/file_annexes/uploadFile"
      let fd = new FormData()
      if (this.pathUrl) {
        url = this.pathUrl
        fd.append('file', file.file)// 传文件
      } else {
        if (!this.beforeUpload(file.file, this.uploadObj)) {
          return
        }

        fd.append('file', file.file)// 传文件
        fd.append('folderId', this.folderId)
        fd.append('taskName', this.uploadObj.taskName)//selfClass
        fd.append('companyName', this.selfClass)//selfClass
      }

      let headers = {
        'Authorization': "Bearer " + cookieFn.getCookie(process.env.VUE_APP_TOKEN),
        'content-type': 'multipart/form-data'
      }


      axios({
        baseURL: process.env.VUE_APP_API,
        url: url,
        method: 'post',
        headers: headers,
        data: fd,
        onUploadProgress: (progressEvent) => { this.progress(progressEvent) }
      }).then((res2) => {
        console.log(res2, "res2")
        let res = res2.data
        
        this.btnDisabled = !this.btnDisabled;
        //this.fdata.btnDisabled = !this.fdata.btnDisabled;
      
        // let { data } = res//data是包含人工code的对象
        if (res.code == 200) {//上传成功
          this.upLoadSuccess(res.data, file.file)
        } else { //上传失败
          this.$message.error(res.msg);
          this.currentNum--
        }
      })

    },
    //3 上传图片之前
    beforeUpload(file, item) {
      console.log("文件校验是否合法事件")
      let activeFileType = file.name.split(".").pop();//文件类型
      if (item.num && item.detail.length + this.currentNum >= item.num) {
        this.btnDisabled = !this.btnDisabled;
        //this.fdata.btnDisabled = !this.fdata.btnDisabled;
        this.$message.error(`只能上传${item.num}个`);
        return false;
      }
      else if (
        item.type &&
        item.type.length &&
        !item.type.includes(activeFileType.toLowerCase())
        // !item.type.some((p) => p.toLowerCase() == activeFileType.toLowerCase())
      ) {
        this.$message.error(`请上传正确的文件类型`);
        this.btnDisabled = !this.btnDisabled;
        //this.fdata.btnDisabled = !this.fdata.btnDisabled;
        return false;
      }
      else if (item.size && ((file.size / 1024 / 1024) > item.size)) {
        this.$message.error(`文件最大为${item.size}M`)
        this.btnDisabled = !this.btnDisabled;
        //this.fdata.btnDisabled = !this.fdata.btnDisabled;
        return false;
      }
      else {
        this.currentNum++;
        return true;
      }
    },
    //文件上传中
    progress(progressEvent) {
      console.log(progressEvent, "progressEvent")
      let uploadPercent = Math.round((progressEvent.loaded * 100) / progressEvent.total)
      this.percentage = 0;
      this.$nextTick(() => {
        this.percentage = Number(uploadPercent.toFixed(0));
        if (this.percentage >= 100) {
          this.percentage = 0;
        }
      });
      // console.log("文件上传中,对于自定义上传貌似没用")
    },
    //5 文件上传成功
    upLoadSuccess(data, file) {
      this.currentNum--
      this.$message.success(data.fileName + "上传成功！");
      this.$emit("success", {
        taskName: this.uploadObj.taskName,
        data,
        file,
      });
      //普通模式
      if (!this.mode && this.folderId) {
        this.getFiles()
      }
      //如果 mode == "noFolderId"
      else if (this.mode == "noFolderId") {
        this.uploadObj.detail = [data];//data是单个文件
      }
      //如果 mode == "getFileById"
      else if (this.mode == "getFileById") {
        this.getById(data.id)
      }
    },

  },
};
</script>

<style style="scss" scoped>
.downloadFile {
  cursor: pointer;
}
</style>
