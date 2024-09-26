/**
 * { validator: self.$validator.positivenumberpoint, trigger: "blur" },
 * 正整数和小数
 * @param {*} rule 
 * @param {*} value 
 * @param {*} callback 
 */
export function positivenumberpoint(rule, value, callback) {
  if (value) {
    var reg = /^\d+(\.\d+)?$/;
    if (reg.test(value) == false) {
      callback("请输入正整数和小数");
    } else {
      callback();
    }
  } else {
    callback();
  }
}

/**
 * { validator: self.$validator.positivenumber, trigger: "blur" },
 * 正整数
 */
export function positivenumber(rule, value, callback) {
  if (value) {
    var reg = /^\d+$/;
    if (reg.test(value) == false) {
      callback("请输入正整数");
    } else {
      callback();
    }
  } else {
    callback();
  }
}

/**
 * { validator: self.$validator.creditCode, trigger: "blur" },
 * 统一社会信用代码
 */
export function creditCode(rule, value, callback) {
  if (value) {
    var reg = /^([0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}|[1-9]\d{14})$/;
    if (reg.test(value) == false) {
      callback(new Error("统一社会信用代码格式不对"));
    } else {
      callback();
    }
  } else {
    callback();
  }
}



/**
 * { validator: self.$validator.IDcard, trigger: "blur" },
 * 身份证正则（大陆，香港，新加坡   只能输入数字和英文）
 */
export function IDcard(rule, value, callback) {
  if (value) {
    //\!\@\#\$\%\^\&\*
    var reg = /^[A-Za-z0-9\(\)（）]+$/;
    if (reg.test(value) == false) {
      callback(new Error("只能输入数字和英文"));
    } else {
      callback();
    }
  } else {
    callback();
  }
}

//手机号正则
export function mobile(rule, value, callback) {
  if (value) {
    // var reg = /^1[3,4,5,6,7,8,9][0-9]\d{8}$/;
    var reg = /\b\d{11}\b/;
    if (reg.test(value) == false) {
      callback("请输入正确的手机号");
    } else {
      callback();
    }
  } else {
    callback();
  }
}

// { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




//手机号和座机正则
export function mobileOrZhuoji(rule, value, callback) {
  if (value) {
    // var reg = /^1[3,4,5,6,7,8,9][0-9]\d{8}$/;
    var reg = /\b\d{11}\b/;
    var reg1 = /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/; //带区号
    if (reg.test(value) == false && reg1.test(value) == false) {
      callback("请输入正确的号码");
    } else {
      callback();
    }
  } else {
    callback();
  }
}

//只允许中文、括号
export function onlyZH(rule, value, callback) {
  if (value) {
    var reg = /^[\u4e00-\u9fa5\（\）\(\)]+$/;
    if (reg.test(value) == false) {
      callback("请输入中文、括号");
    } else {
      callback();
    }
  } else {
    callback();
  }
}

//只允许中文、括号、数字
export function ZHnumber(rule, value, callback) {
  if (value) {
    var reg = /^[\u4e00-\u9fa5\（\）\(\)\d]+$/;
    if (reg.test(value) == false) {
      callback("请输入中文、括号、数字");
    } else {
      callback();
    }
  } else {
    callback();
  }
}

//匹配中文，英文字母和数字及_
export function zhNUmEng(rule, value, callback) {
  if (value) {
    var reg = /^[a-zA-Z0-9\u4e00-\u9fa5\.\(\)\（\）\&\[\]\{\}\、\_\-\,\，]+$/;
    if (reg.test(value) == false) {
      callback(new Error("请输入中文，英文字母和数字及_-.()&[]{}、"));
    } else if (value.length > 60) {
      callback(new Error("字符长度限制在60"));
    } else {
      callback();
    }
  } else {
    callback();
  }
}

//企业名称正则( 中文 数字 英文)
export function isCompany(rule, value, callback) {
  if (value) {
    var reg = /^[\u4e00-\u9fa5\(\)\（\）\、\da-zA-Z&]{2,50}$/;
    if (reg.test(value) == false) {
      callback("企业名称格式不正确");
    } else {
      callback();
    }
  } else {
    callback();
  }
}

//正整数、负整数和小数
export function numberpoint(rule, value, callback) {
  if (value) {
    var reg = /^(\-|\+)?\d+(\.\d+)?$/;
    if (reg.test(value) == false) {
      callback("请输入正数、负数和小数");
    } else {
      callback();
    }
  } else {
    callback();
  }
}



//正整数和小数 0-100内
export function positivenumberpoint_0_100(rule, value, callback) {
  if (value) {
    var reg = /^\d+(\.\d+)?$/;
    if (reg.test(value) == false) {
      callback("请输入正整数和小数");
    } else if (value > 100 || value < 0) {
      callback("请输入0-100的数字");
    } else {
      callback();
    }
  } else {
    callback();
  }
}



//正整数或1-2位的小数
export function realnumber2point(rule, value, callback) {
  if (value) {
    var reg = /^[0-9]+(\.[0-9]{1,2})?$/;
    if (reg.test(value) == false) {
      callback("请输入正整数或1-2位的小数");
    } else {
      callback();
    }
  } else {
    callback();
  }
}

//正整数或1-6位的小数
export function realnumber6point(rule, value, callback) {
  if (value) {
    var reg = /^[0-9]+(\.[0-9]{1,6})?$/;
    if (reg.test(value) == false) {
      callback("请输入正整数或1-6位的小数");
    } else {
      callback();
    }
  } else {
    callback();
  }
}
//固定13位正整数
export function Num_13(rule, value, callback) { 
  if (value) {
    var value2  =  value.match(/\d+/g);//将数字提出成数组
    var reg = /^\d{13}$/;//固定13的正则
    if (reg.test(value2[0]) == false) {
      callback("快递单号是13位");
    } else {
      callback();
    }
  } else {
    callback();
  }
}

//最大允许12位正数内以及6位小数
export function numLimit18_6(rule, value, callback) {
  if (value) {
    var reg = /^[1-9]\d{0,11}(\.\d{1,6})?$|^0(\.\d{1,6})?$/;
    if (reg.test(value) == false) {
      callback("最大允许12位整数以及6位小数");
    } else {
      callback();
    }
  } else {
    callback();
  }
}

//邮编
export function ems(rule, value, callback) {
  if (value) {
    var reg = /^\d{6}$/;
    if (reg.test(value) == false) {
      callback("请输入正确邮编");
    } else {
      callback();
    }
  } else {
    callback();
  }
}

//正整数、负整数或者1-2位小数
export function realnegativenumber2point(rule, value, callback) {
  if (value) {
    var reg = /^(\-|\+)?\d+(\.\d{1,2})?$/;
    if (reg.test(value) == false) {
      callback("请输入正整数、负整数或者1-2位小数");
    } else {
      callback();
    }
  } else {
    callback();
  }
}


//固定有两位小数的正整数 在0-100之间
export function realnumber2pointBFS(rule, value, callback) {
  if (value) {
    // var reg = /^[0-9]+(\.[0-9]{2})?$/;
    var reg = /^[0-9]+(\.[0-9]{1,2})?$/;
    if (reg.test(value) == false) {
      callback("请输入/固定有两位小数的正整数");
    } else if (value < 0 || value > 100) {
      callback("必须在0-100之间");
    } else {
      callback();
    }
  } else {
    callback();
  }
}


//数字和英文
export function numAndABC(rule, value, callback) {
  if (value) {
    var reg = /^[0-9a-zA-Z]{1,}$/;
    if (reg.test(value) == false) {
      callback("数字和英文");
    } else {
      callback();
    }
  } else {
    callback();
  }
}
///////////////////////////////////////////
//护照
export function passport(rule, value, callback) {
  if (value) {
    var reg = /^[a-zA-Z0-9]{5,17}$/;
    if (reg.test(value) == false) {
      callback(new Error("护照格式不对"));
    } else {
      callback();
    }
  } else {
    callback();
  }
}

//港澳通行证
export function hongkongpass(rule, value, callback) {
  if (value) {
    var reg = /^[a-zA-Z0-9]{6,10}$/;
    if (reg.test(value) == false) {
      callback(new Error("港澳通行证格式不对"));
    } else {
      callback();
    }
  } else {
    callback();
  }
}

//台胞证
export function taiwanpass(rule, value, callback) {
  if (value) {
    var reg = /^([0-9]{8}|[0-9]{10})$/;
    if (reg.test(value) == false) {
      callback(new Error("台胞证格式不对"));
    } else {
      callback();
    }
  } else {
    callback();
  }
}



//大陆身份证正则
export function IDcardChina(rule, value, callback) {
  if (value) {
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if (reg.test(value) == false) {
      callback(new Error("大陆身份证格式错误"));
    } else {
      callback();
    }
  } else {
    callback();
  }
}


//工商注册号
export function gsNum(rule, value, callback) {
  if (value) {
    var reg = /^[1-7]\d{14}$/;
    if (reg.test(value) == false) {
      callback(new Error("工商注册号格式错误"));
    } else {
      callback();
    }
  } else {
    callback();
  }
}


// 非空格
export function notSpace(rule, value, callback) {
  if (value) {
    var reg = /^[^\s]*$/;  //^[^\(\)]*$  不允许英文的括号
    if (reg.test(value) == false) {
      callback(new Error("不能输入空格"));
    } else {
      callback();
    }
  } else {
    callback();
  }
}


//判断字符串是否是https?:|mailto:|tal: 开头的
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
