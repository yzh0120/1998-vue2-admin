
<!-- 下拉框


     {
                        title: "渠道名称",
                        field: "channel_id",
                        type: "selectd",
                        optmini:[],            // 这个字段在文件内就处理好了
                        opt: [],               //重点需要一开始把所有数据请求出来
                        text: "name",
                        value: "id",
                        span: 12,
                        rules: [
                            { required: true, message: "请填写", trigger: ["blur"] },
                        ],
                    }
 -->
 <!--   :filter-method="item.filterFn"  -->
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
  
    :remote="true" 
    :remote-method="remoteFFFFFF">
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
    remoteFFFFFF(query) {
      // console.log(query,"query",this.item.opt)
      // if (query.length >= 2) {
      if(query.length >= this.miniLength){
        this.item.optmini = this.item.opt.filter((e) => {
          console.log(e,query,this.text,e[this.text])
          return e[this.text].startsWith(query)
        })
      }
    },
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
      this.$emit("baseFormEvent", {
        name: "clear",
        value: nowValue,
      });
    },
  },
  computed: {
    //将id转成文字
    ttt() { 
      let obj = this.item.opt.find((e) => {
            return e[this.value] == this.data[this.item.field]
      })
      
      if (obj) { 
        // console.log(obj,this.item.opt,this.data[this.item.field],"obj==========================================================")
        return obj[this.text]
      }
    },
    miniLength() { 
      return this.item.miniLength ? this.item.miniLength : 2 
    },
    mvalue: {
      get() {
        if (!this.item.optmini.length) {
          return this.ttt
        } else {
          return this.data[this.item.field]
        }
      },
      set(v) {

        this.showTick = false
        setTimeout(() => {
          this.showTick = true
          this.data[this.item.field] = v
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
