<!-- 日期选择器
 type:'date '                               控件类型
 field:xxx                                  控件对应的字段      
 title: '账号',                             控件描述
 rules:[],                                  控件校验规则
 valueFormat                                日期值的格式化规则 
 :picker-options="item.pickerOpt"           控件选项  见文档
  disabled:true                              禁用
 年     月(包括年) 日期    多个日期   星期几   日期时间   日期时间范围    日期范围      月份范围(包括年)
 year  /month     /date   /dates   / week  /  datetime  /datetimerange/ daterange  /  monthrange
 -->

<template>
  <el-date-picker style="width: 100%" v-model="xxx" :type="item.type" :value-format="valueFormat" clearable
    :disabled="item.disabled" :placeholder="_getPlaceholder(item)" @change="change" @input="$forceUpdate()"
    start-placeholder="开始日期" range-separator="至" end-placeholder="结束日期" :picker-options="item.pickerOpt" />
  <!-- <div>
		<template v-if="item.type!='daterange'">
			<el-date-picker style="width: 100%;" v-model="data[item.field]" :type="item.type" :value-format="valueFormat"
				:picker-opt="item.opt" clearable :disabled="item.disabled" :placeholder="_getPlaceholder(item)"
				@change="change" />
		</template>

<template v-else-if="item.type=='daterange'">
			<el-date-picker v-model="data[item.field]" type="daterange" range-separator="至" start-placeholder="开始日期"
				end-placeholder="结束日期" :value-format="valueFormat" :picker-opt="item.opt" :disabled="item.disabled"
				:placeholder="_getPlaceholder(item)" @change="change">
			</el-date-picker>
		</template>
</div> -->
</template>

<script>
export default {
  //   props: ["data", "item"],
  watch: {
    xxxxxx: {
      handler() { 
        if (this.item.type.includes("daterange")) { 
          if (this.$fn.type(this.data[this.item.field]) == "arr" && this.$fn.type(this.item.labelField) == "arr") {
            this.$set(this.data, this.item.labelField[0], this.data[this.item.field][0]);
            this.$set(this.data, this.item.labelField[1], this.data[this.item.field][1]);
          }
        }
      },
    },
  },
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
    return {};
  },

  methods: {
    change(nowValue) {
      this.$emit("baseFormEvent", {
        name: "change",
        value: nowValue,
      });
      //兼容以前
      this.$emit("baseFormEvent", {
        name: "date",
        value: nowValue,
      });
    },
  },
  computed: {
    xxxxxx() { 
      return this.data[this.item.field]
    },
    xxx: {
      get() {
        // if (this.item.type == "datetimerange" || this.item.type == "daterange" || this.item.type == "yearMonthrange") {
        if (this.item.type.includes("daterange")) { 
          if (this.$fn.type(this.data[this.item.field]) != "arr") {
            this.$set(this.data, this.item.field, []);
          }
          return this.data[this.item.field];
        }else{
          return this.data[this.item.field];
        }

    },
    set(val) {
      this.$set(this.data, this.item.field, val);
    },
  },
  valueFormat() {
    if (this.item.valueFormat) {
      return this.item.valueFormat;
    } else {
      if (this.item.type == "datetime" || this.item.type == "datetimerange") {
        return "yyyy-MM-dd HH:mm:ss";
      } else if (
        this.item.type == "date" ||
        this.item.type == "dates" ||
        this.item.type == "daterange"
      ) {
        return "yyyy-MM-dd";
      } else if (this.item.type == "year" || this.item.type == "yearMonth" ||
        this.item.type == "yearMonthrange") {
        return "yyyy-MM";
      }
      // else if (
      //   this.item.type == "month" ||
      //   this.item.type == "monthrange"
      // ) {
      //   return "MM";
      // }
      // else if (this.item.type == "week") {
      //   return "WW";
      // }
    }
  },
},
};
</script>

<style lang="scss" scoped></style>
