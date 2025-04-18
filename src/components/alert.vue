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
  <vxe-modal :ref="modal" v-model="flag" :mask="false" :lockView="false" show-minimize show-maximize :width="w"
    :height="h" show-footer :title="title" @close="cancel"  resize v-if="flag || data.nowShow">
      <slot></slot>
    <template #footer>
      <el-button @click="cancel"  plain>取消</el-button>
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
          height: null,
          loading: false
        }
      }
    }
  },
  data() {
    return {
      modal:new Date().getTime() + ""
    }
  },
  mounted() {
    if (this.data.nowShow) { 
      this.flag = true;
      this.$refs[this.modal].$el.style.display = "none";
      this.$nextTick(() => {
      this.flag = false;
      setTimeout(() => {
          this.$refs[this.modal].$el.style.display = "";
      }, 1000);
      });
    }
  },
  methods: {
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
    w() {
      return this.data.width ? this.data.width : "80%";
    },
    h() {
      return this.data.height ? this.data.height : "80%";
    },
    title() {
      return this.data.title ? this.data.title : "标题";
    },
  },
};
</script>

<style></style>
