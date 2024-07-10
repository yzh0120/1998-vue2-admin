
<!-- 下拉框


     {
                        title: "渠道名称",
                        field: "channel_id",
                        labelField:["channel_name"], //重点需要这个有值
                        type: "selectf",
                        opt: [],
                        text: "name",
                        value: "id",
                        span: 12,
                        remote: self.select_remote,
                        rules: [
                            { required: true, message: "请填写", trigger: ["blur"] },
                        ],
                    }


            select_remote(query) {
                console.log(query, "query");
                if (query.length >= 4) {
                    mxhApi.getChannelList({ channel_name: query }).then((res) => {
                        if (res.code == 200) {
                            this._setList(this.formInfo4, "channel_id", {
                                opt: res.data,
                            });
                        } else {
                            this.$message.error(res.info);
                        }
                    });
                }
            },
 -->
 <!--     :filter-method="item.filterFn"  -->
<template>
  <el-select 
  v-if="showTick" 
  style="width: 100%" 
  v-model="mvalue" 
  :disabled="item.disabled" 
  clearable
    :placeholder="_getPlaceholder(item)" 
    @change="change" 
    @clear="setValueNull" 
    :multiple="mult || item.create"
    :allow-create="item.create" 
    filterable 

    :remote="remote" 
    :remote-method="item.remote">
    <el-option v-for="(childItem, childIndex) in item.opt" :key="childIndex" :label="childItem[text]"
      :value="childItem[value]" />
  </el-select>
</template>

<script>
export default {
  //   props: ["data", "item"],
  props: {
    data: {
      type: Object,
      default: () => { },
    },
    item: {
      type: Object,
      default: () => { },
    },
  },
  data() {
    return {
      showTick: true
    };
  },
  methods: {
    change(nowValue) {
      let activeOptObj = {}
      this.item.opt.forEach((e) => { 
        if (e[this.value] === nowValue) { 
          activeOptObj = e
        }
      })
      this.$emit("baseFormEvent", {
        name: "change",
        activeOptObj:activeOptObj,
        value: nowValue,
      });
      //兼容以前
      this.$emit("baseFormEvent", {
        name: "select",
        activeOptObj:activeOptObj,
        value: nowValue,
      });
    },
    setValueNull(nowValue) {
      this.data[this.item.labelField] = ""//配合点击x但是清空不了的问题
      this.$emit("baseFormEvent", {
        name: "clear",
        value: nowValue,
      });
    },
  },
  computed: {
    mvalue: {
      get() {
        // console.log(!this.item.opt.length , !this.item.remote)
        if (!this.item.opt.length && this.item.remote) {
          return this.data[this.item.labelField]
        } else {
          return this.data[this.item.field]
        }
      },
      set(v) {
        //this.data[this.item.field] = v
        this.showTick = false
        setTimeout(() => {
          this.showTick = true
          this.data[this.item.field] = v
          if (v === "") { //配合点击x但是清空不了的问题
            this.setValueNull()
          }
        }, 0)
      },


    },
    mult() {
      if (this.item.mult) {
        return true;
      } else {
        return false;
      }
    },
    filter() {
      if (this.item.filter) {
        return true;
      } else {
        return false;
      }
    },
    remote() {
      if (this.item.remote) {
        return true;
      } else {
        return false;
      }
    },
    text() {
      if (this.item.text) {
        return this.item.text;
      } else {
        return "text";
      }
    },
    value() {
      if (this.item.value) {
        return this.item.value;
      } else {
        return "value";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
