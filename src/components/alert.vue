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
  <vxe-modal ref="modal" v-model="flag" :mask="false" :lockView="false" show-minimize show-maximize :width="w"
    :height="h" show-footer :title="title" @close="cancel" v-if="flag" resize>
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
          height: null,
          loading: false
        }
      }
    }
  },
  data() {
    return {
    }
  },
  mounted() {
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
    msg() {
      return this.data.msg;
    },
  },
};
</script>

<style></style>
