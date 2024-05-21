import dayjs from "dayjs";
import XEUtils, {
  toNumber
} from "xe-utils";
import store from '@/store/index' //vuex
//https://vxetable.cn/xe-utils/#/
/************************************************************************************************************/



/************************************************************************************************************/
/**
 * 深度克隆
 * @param {*} target 
 * @returns 
 */
export function deepClone(target) {
  return XEUtils.clone(target, true);
}



/**
 * 集合分组,默认使用键值分组,如果有 iterate 则使用结果进行分组
 * @param {number} num1 
 * @param {number} num2 
 * @returns 
 */
export function groupBy(data, key) {
  if (data && key) {
    return XEUtils.groupBy(data, key)
  } else {
    return []
  }
}





/**
 * 生成唯一的随机数
 * @returns 
 */
export function guid() {
  var s = [];
  var hexDigits = "0123456789abcdef";
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = "-";

  var uuid = s.join("");
  return uuid;
}


/**
 * 对手机号码，身份证部分数字加*号处理
 * @param {string} str 
 * @param {number} s 开始下标
 * @param {number} e 截止下标
 * @returns 
 */
export function starReplace(str, s, e) {
  if (!str) return str;

  var _k = !!e && e != 0 ? str.substring(s, e) : str.substring(s);

  var _v = "";

  for (var i = 0; i < _k.length; i++) _v += "*";
  return str.replace(_k, _v);
}





/**
 * 类型
 * @param {string} str 
 * @returns 
 */
export function type(data) {
  let res = Object.prototype.toString.call(data).slice(8, -1)
  if (res == 'String') {
    return "str"
  } else if (res == 'Number') {
    return "num"
  } else if (res == 'Boolean') {
    return "boo"
  }
  // else if (res == 'Null'){
  // 	return "null"
  // }
  else if (res == 'Undefined' || res == 'Null') {
    return "und"
  } else if (res == 'Object') {
    return "obj"
  } else if (res == 'Function') {
    return "fn"
  } else if (res == 'Date') {
    return "date"
  } else if (res == 'RegExp') {
    return "reg"
  } else if (res == 'Array') {
    return "arr"
  }
}

//获取html内的文字
export  function getSimpleText(str) {
  if (str) {
    str = str.replace(/<[^>]+>|&[^>]+;/g, "").trim(); //去掉所有的html标签和&nbsp;之类的特殊符合
    return str;
  } else {
    return "";
  }
}


///数据字典转化
export function dataItem_text(field, value, isNumber) {
  // console.log(value,"----111value")
  if (value === null || value === undefined) {
    return ""
  }
  let arr = store.state.config.dataItem[field]
  // console.log(arr,"----111")
  if (arr) {
    if (isNumber) {
      let obj = arr.find((e) => {
        return Number(e.value) === value
      })
      if (obj) {
        return obj.label
      } else {
        return ""
      }
    } else {
      let obj = arr.find((e) => {
        // console.log(e.value,value)
        return e.value === value
      })
      // console.log(obj,"obj")
      if (obj) {
        return obj.label
      } else {
        return ""
      }

    }

  } else {
    return '数据字典没有此字段'
  }
}
//label
//value
///数据字典转化
export function dataItem_list(field, isNumber) {
  let arr = deepClone(store.state.config.dataItem[field])
  if (arr) {
    if (isNumber) {
      arr.forEach((e) => {
        e.value = Number(e.value)
      })
      return arr
    } else {
      return arr
    }

  } else {
    return '数据字典没有此字段'
  }
}
