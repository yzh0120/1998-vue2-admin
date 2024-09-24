<!-- 
data：{
	flag:""                                 控制弹窗显示隐藏字段
	width:'100px' 
	height:'100px' 
	title:'标题'                              标题
	msg：false                                是否只是信息弹窗
}
 -->
<!-- 
      <alert :data="alertData" @cancel="alertCancel" @close="alertCancel" @confirm="alertConfirm">
    </alert>

       alertData: {
        alert: false
      },
 -->
<template>
  <vxe-modal ref="modal" v-model="flag" :mask="false" 
  :lockView="false" show-minimize show-maximize :width="data.width" :height="data.height" show-footer :title="title" @close="cancel" v-if="flag" resize>
      
        <!-- <template #corner>
          <vxe-icon name="minus" @click="narrow" style="cursor: pointer;" v-if="active_full_narrow == `normal`"></vxe-icon>
          <vxe-icon name="maximize" @click="narrow" style="cursor: pointer;"  v-else></vxe-icon>
          

          <span style="margin-right: 10px"></span>
          <vxe-icon name="fullscreen" @click="full" style="cursor: pointer;" v-if="active_full_narrow == `normal`"></vxe-icon>
          <vxe-icon name="maximize" @click="full" style="cursor: pointer;"  v-else></vxe-icon>
          
        </template> -->

          <slot></slot>

    <template #footer>
      <el-button @click="cancel" v-if="!msg" plain>取消</el-button>
      <el-button type="primary" @click="confirm" :loading="data.loading">确认</el-button>
    </template>
  </vxe-modal>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => { 
        return {
  
          width: null,
          height:null,
          loading:false
        }
      }
    }
  },
  data() { 
    return {
      // top: "center",
      //       left:"center",
      oldW: null,
      oldH:null
    }
  },
  mounted() { 
    if (!this.data.width) { 
      this.data.width = "80%"
    }
    if (!this.data.height) { 
      this.data.height = "80%"
    }
    this.oldW = this.data.width
    this.oldH = this.data.height


  },
  methods: {
    full() { 
      if (this.data.width == "100%") {
        this.data.width = this.oldW
        this.data.height = this.oldH
      }else if(this.data.width == 200) { 
        this.data.width = "100%"
        this.data.height = "100%"
      }
      else { //正常的
        this.data.width = "100%"
        this.data.height = "100%"
      }
      console.log(this.data.width, "this.data.width")
      this.$refs.modal.setPosition(0,0)
      this.$forceUpdate()
    },
    narrow() { 
      if (this.data.width == "100%") {
        this.data.width = 200
        this.data.height = 200
      }
      else if (this.data.width == 200) {
        this.data.width = this.oldW
        this.data.height = this.oldH

      } else { //正常的
        this.data.width = 200
        this.data.height = 200

      }
      console.log(this.data.width, "this.data.width")
      this.$refs.modal.setPosition(0,0)
      this.$forceUpdate()
    },
    cancel() {
      this.$emit("cancel");
    },
    confirm() {
      this.$emit("confirm");
    },
    close() {
      this.$emit("close");
    },
  },
  computed: {
    active_full_narrow() { 
      if (this.data.width == "100%") { 
        return "full"
      }else if (this.data.width == 200) { 
        return "narrow"
      }else  { 
        return "normal"
      }
    },
    flag: {
      get() {
        return this.data.alert;
      },
      set(val) {
        this.data.alert = val;
      },
    },
    // w() {
    //   return this.data.width ? this.data.width : "80%";
    // },
    // h() {
    //   return this.data.height ? this.data.height : "80%";
    // },
    title() {
      return this.data.title ? this.data.title : "标题";
    },
    msg() {
      return this.data.msg;
    },
  },
};
</script>

<style>

</style>
