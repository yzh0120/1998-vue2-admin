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
  :lockView="false" :width="data.width" :height="data.height" show-footer :title="title" @close="cancel" v-if="flag" show-zoom>
      {{ data.width  }}
        <template #corner>
          <vxe-icon name="minus" @click="narrow" style="cursor: pointer;"></vxe-icon>
        </template>

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
    narrow() { 
      if (this.data.width == 200) {
        this.data.width = this.oldW
        this.data.height = this.oldH
        // this.top= "center"
        // this.left="center"
      } else { 
        this.data.width = 200
        this.data.height = 200
        // this.top=0
        // this.left=0
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
