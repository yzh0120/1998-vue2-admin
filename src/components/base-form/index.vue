<!-- 
  data:{
	  必写
	  list:[修改list的值只允许通过 setList  ,可以动态 push(item) splice() 等数组方法
	  ],
	  data:{}   保存表单结果的对象  
								  !!!!!!!!!!data.xxx  不改变内存地址
								     可以直接在data里面写字段,在 mounted  触发函数都可以通过data.xxx修改
                      在created钩子函数中不要通过data..xxx修改值会导致问题
								  !!!!!!!!!!改变内存地址
								     data =  {}   不会报错(在任何钩子阶段都可以)  
		dom:null 
		可选:
		titleWidth:"200px"                        表单的labelWidth   
		isRow:flase                               是否响应式
		inline：flase                             行内表单
    span:true
  } 
 -->

<template>
  <el-form ref="form" :class="data.className" :model="formData" :label-width="labelWidth" style="" :inline="inline"
    :size="size" @submit.native.prevent :disabled="disabled">
    <div v-if="againShow">
      <!-- 是否响应式 -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -->
      <template v-if="isRow">
        <!-- <el-row v-if="isRow"> -->
        <el-row>
          <el-col :xs="item.xs" :sm="item.sm" :md="item.md" :lg="item.lg" :xl="item.xl"
            v-for="(item, index) in for_List" :key="index + `row`" v-if="item.show === false ? false : true">
            <!-- item.show === false ? false : true -->
            <el-form-item :prop="item.field" :label="item.title"
              :class="[item.labelTip?`labelTipClass`:``,item.className]" :rules="item.rules"
              :label-width="item.labelWidth">
              <!-- 问号 -->
              <template v-if="item.labelTip" #label>
                <div>
                  {{ item.title }}
                  <el-tooltip class="item" effect="dark" :content="item.labelTip" placement="top-start">
                    <i class="el-icon-question"></i>
                  </el-tooltip>
                </div>
              </template>
              <!-- 插槽 -->
              <template v-if="item.slot">
                <slot :name="item.slot" />
              </template>
              <!-- 动态组件 -->
              <component :is="currentComponent(item.type)" :item="item" :bossData="data" @baseFormEvent="(e) => {
    event(e, item);
  }
    " :data="formData" v-else :dis="disabled" />
            </el-form-item>
          </el-col>
        </el-row>
      </template>

      <!-- 是否span -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -->
      <template v-else-if="span">
        <!-- <el-row v-if="isRow"> -->
        <el-row>
          <el-col :span="item.span ? item.span : 8" v-for="(item, index) in for_List" :key="index + `span`"
            v-if="item.show === false ? false : true">
            <!-- item.show === false ? false : true -->
            <el-form-item :prop="item.field" :label="item.title"
              :class="[item.labelTip?`labelTipClass`:``,item.className]" :rules="item.rules"
              :label-width="item.labelWidth">
              <!-- 问号 -->
              <template v-if="item.labelTip" #label>
                <div>
                  {{ item.title }}
                  <el-tooltip class="item" effect="dark" :content="item.labelTip" placement="top-start">
                    <i class="el-icon-question"></i>
                  </el-tooltip>
                </div>
              </template>
              <!-- 插槽 -->
              <template v-if="item.slot">
                <slot :name="item.slot" />
              </template>
              <!-- 动态组件 -->
              <component :is="currentComponent(item.type)" :item="item" :bossData="data" @baseFormEvent="(e) => {
    event(e, item);
  }
    " :data="formData" v-else :dis="disabled" />
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 比如 搜索页面居中的按钮 -->
        <!-- <slot /> -->
      </template>

      <!-- 不是响应式 -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -->
      <template v-else>
        <!-- item.show === false ? false : true -->
        <el-form-item v-for="(item, index) in for_List" v-if="item.show === false ? false : true"
          :key="index + 'normal'" :prop="item.field" :label="item.title" :rules="item.rules"
          :label-width="item.labelWidth" :class="[item.labelTip?`labelTipClass`:``,item.className]">
          <!-- 问号 -->
          <template v-if="item.labelTip" #label>
            <div>
              {{ item.title }}
              <el-tooltip class="item" effect="dark" :content="item.labelTip" placement="top-start">
                <i class="el-icon-question"></i>
              </el-tooltip>
            </div>
          </template>
          <!-- 插槽 -->
          <template v-if="item.slot">
            <slot :name="item.slot" />
          </template>
          <!-- 动态组件 -->
          <component :is="currentComponent(item.type)" :item="item" @baseFormEvent="(e) => {
    event(e, item);
  }
    " :data="formData" v-else :dis="disabled" :bossData="data" />
        </el-form-item>
      </template>
      <slot />
    </div>
  </el-form>
</template>

<script>
import formatInput from "./base-moneyInput.vue";
import baseInput from "./base-input.vue";
import baseInputrange from "./base-inputrange.vue";
import baseTreeselect from "./base-treeselect.vue";
import basePassword from "./base-password.vue";
import baseTextarea from "./base-textarea.vue";
import baseSelect from "./base-select.vue";
import baseSelectF from "./base-select-f.vue";
import baseSelectD from "./base-select-d.vue";
import baseTimeSelect from "./base-time-select.vue"; //时间选择器
import baseDatePicker from "./base-date-picker.vue"; //日期选择器
import baseSwitch from "./base-switch.vue"; //开关
import baseRadio from "./base-radio.vue"; //单选
import baseCheckbox from "./base-checkbox.vue"; //多选
import baseAuto from "./base-auto.vue"; //搜素过滤
export default {
  components: {
    basePassword,
    baseTextarea,
    baseInput,
    baseSelect,
    baseSelectF,
    baseSelectD,
    baseTimeSelect,
    // baseDateTimePicker,
    baseDatePicker,
    baseSwitch,
    baseRadio,
    baseCheckbox,
    baseAuto,
    baseTreeselect,
    baseInputrange,
    formatInput,
  },
  props: {
    data: {
      type: Object,
      default: () => { },
    },
    dis: {
      default: false,
    },
  },
  data() {
    return {
      againShow: true,
    };
  },
  watch: {
    "data.list.length": {
      handler: function (newVal) {
        this._addDis(this.data); //增加disabled  可以直接写在data:{}
        this._updatedata(this.data);
      },
      // immediate: true,
      // deep: true, // 深度监听
    },
    "formData": {
      handler: function () {
        setTimeout(() => {
          this.clearValidate()
        }, 0);
      },
      immediate: true,
      deep: true, // 深度监听
    },

  },
  created() {
    this._updatedata(this.data);
    this.autoTrigger();
    this._addDis(this.data); //增加disabled    可以直接写在data:{}
  },
  mounted() {

  },
  computed: {
    disabled() {
      return this.dis;
    },
    for_List() {
      return this.data.list;
    },
    formData() {
      return this.data.data;
    },
    labelWidth() {
      if (this.data.inline && !(this.data.titleWidth || this.data.labelWidth)) {
        return "";
      }
      if (this.data.titleWidth) {
        return this.data.titleWidth
      } else if (this.data.labelWidth) {
        return this.data.labelWidth
      } else {
        return "160px"
      }
    },
    span() {
      return this.data.span;
    },
    isRow() {
      if (this.data.isRow) {
        this.data.list.forEach((item) => {
          if (item.xs || item.sm || item.md || item.lg || item.xl) {
            let obj = {
              xs: undefined, //<768px
              sm: undefined, //≥768px
              md: undefined, //≥992px
              lg: undefined, //≥1200px
              xl: undefined, //≥1920px
            };
            this.data.list.forEach((item) => {
              item = Object.assign(item, obj, this.$fn.deepClone(item));
            });
          } else {//一个都没值
            let obj = {
              xs: 24, //<768px
              sm: 12, //≥768px
              md: 12, //≥992px
              lg: 8, //≥1200px
              xl: 8, //≥1920px
            };
            item = Object.assign(item, obj);
          }
        });
      }
      return this.data.isRow;
    },
    inline() {
      if (this.data.isRow || this.data.span) {
        return false;
      } else {
        return this.data.inline;
      }
    },
    size() {
      if (this.data.size) {
        return this.data.size;
      } else {
        return "small";
      }
    },
  },
  methods: {

    //将不同的表单控件的rules的trigger设定
    autoTrigger() {
      this.data.list.forEach((item) => {
        if (item.rules && item.rules.length) {
          if (item.type == "select") {
            item.rules.forEach((rule) => {
              rule["trigger"] = "change";
            });
          } else if (item.type == "treeselect") {
            item.rules.forEach((rule) => {
              rule["trigger"] = ["blur", "change"];
            });
          } else {
            item.rules.forEach((rule) => {
              rule["trigger"] = "blur";
            });
          }
        }
      });
    },
    //清空校验
    clearValidate(field) {
      if (field) {
        this.$refs.form?.clearValidate(field)
      } else {
        this.$refs.form?.clearValidate()
      }
    },
    //数据重置
    reset() {
      // this.$refs.form.resetFields();
      let obj = {}
      for (let key of Object.keys(this.data.data)) {
        obj[key] = null;
      }
      this.data.data = obj
    },
    //表单校验
    check() {
      let res = undefined;
      this.$refs.form.validate((valid) => {
        if (valid) {
          res = true;
        } else {
          res = false;
        }
      });
      return res;
    },
    //组件
    currentComponent(componentType) {
      if (componentType == "auto") {
        return "baseAuto";
      } else if (componentType == "formatInput") {
        return "formatInput";
      } else if (componentType == "treeselect") {
        return "baseTreeselect";
      } else if (componentType == "checkbox") {
        return "baseCheckbox";
      } else if (componentType == "radio") {
        return "baseRadio";
      } else if (componentType == "switch") {
        return "baseSwitch";
      } else if (componentType == "input") {
        return "baseInput";
      } else if (componentType == "password") {
        return "basePassword";
      } else if (componentType == "textarea") {
        return "baseTextarea";
      } else if (componentType == "select") {
        return "baseSelect";
      } else if (componentType == "selectf") {
        return "baseSelectF";
      } else if (componentType == "selectd") {
        return "baseSelectD";
      } else if (componentType == "time") {
        return "baseTimeSelect";
      } else if (
        // componentType == "date" ||
        // componentType == "datetime" ||
        // componentType == "daterange"

        componentType == "year" ||
        componentType == "yearMonth" ||
        componentType == "date" ||
        componentType == "dates" ||
        componentType == "week" ||
        componentType == "datetime" ||
        componentType == "datetimerange" ||
        componentType == "daterange" ||
        componentType == "yearMonthrange"
      ) {
        return "baseDatePicker";
      } else if (componentType == "inputrange") {
        return "baseInputrange";
      }
    },
    //事件
    event(e, item) {
      Object.assign(e, {
        item: item,
      });
      if (e.name) {
        e.event = e.name
      }
      this.$emit("event", e);
    },

  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  .labelTipClass .el-form-item__label {
    display: flex;
    justify-content: flex-end;
  }

  .el-form-item-small{
    height: 32px !important;
  }
}
</style>
<!-- 

    data:{
		*修改list的值只允许通过 setList  
		list:[                                    循环表单的数组
			{slot: 'sss',label: '插槽',  }           slot
			{ type: 'password',field: '__password',label: '密码',  tip：false,sm:24,md:12,lg:8}
			type类型：
			1 auto input                           自动补全
			2 checkbox                             复选框
			3 date      /daterange                 日期选择器
			4 datetime                             日期时间选择器
			5 input/password                       input/password
			6 radio                                单选框
			7 select                               下拉框
			8 switch                               开关
			9 time                                 时间选择器
		],
		data:{}                                  保存表单数据的对象  不要再created写,从第二个无法触发视图更新,在mounted写
		
		                                                           1可以直接在data里面写字段的值(赋值的时候,做了非空判断) 
																   2可以在js里面 通过this.forminfo.data.xxx
																   3通过setdATA  (这个没啥用,基本抛弃)
		dom:null                             表单的dom
		！*						 
	    labelWidth:"200px"                        表单的labelWidth   
		className:""                              form的class
		isRow:flase                               是否响应式
		inline：flase                              行内表单
	}
 
 -->
