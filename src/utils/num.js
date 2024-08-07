import XEUtils, {
  toNumber
} from "xe-utils";


/**
 * 格式化金额
 * @param {string | number} val 需要格式化的值
 * @param {number} digits 保留几位小数，默认2位
 * @returns XEUtils.commafy(1000000.5678, { digits: 2 }) // '1,000,000.57'
 */
export function formatMoney(val, digits = 2) {
  if (val !== "" && val !== undefined && val !== null) {
    return XEUtils.commafy(toNumber(val), {
      digits: digits
    })
  }
  return ""
}

/**
 * 数字加法
 * @param {number} num1 
 * @param {number} num2 
 * @returns 
 */
export function add(num1, num2) {
  return XEUtils.add(num1, num2)
}

/**
 * 数字减法
 * @param {number} num1 
 * @param {number} num2 
 * @returns 
 */
export function subtract(num1, num2) {
  return XEUtils.subtract(num1, num2)
}

/**
 * 数字乘法
 * @param {number} num1 
 * @param {number} num2 
 * @returns 
 */
export function multiply(num1, num2) {
  return XEUtils.multiply(num1, num2)
}

/**
 * 数字除法
 * @param {number} num1 
 * @param {number} num2 
 * @returns 
 */
export function divide(num1, num2) {
  if (num2 !== 0) {
    return XEUtils.divide(num1, num2)
  } else {
    return 0
  }
}

/**
 * 字符串每隔4位用空格分隔
 * @param {string} val 
 * @param {number} spaceNumber 分割位数
 * @param {string} separator 分隔符
 * @returns XEUtils.commafy('6660000000000001', {spaceNumber: 4, separator: ' '}) // '6660 0000 0000 0001'
 */
export function formatSpace(val, spaceNumber = 4, separator = " ") {
  if (val !== "" && val !== undefined && val !== null) {
    // return XEUtils.commafy(val, {
    //   spaceNumber: spaceNumber,
    //   separator: separator
    // })

    return  val.replace(/(.{4})(?=.)/g, '$1 ');
  }
  return ""
}


/**
 * Number formatting对文件大小进行转换为K,M,G,T,P,E
 * like 10000 => 10k
 * @param {number} num 文件大小数值
 * @param {number} digits 保留的小数位数
 */
export function numberFormatter(num, digits) {
  const si = [{
      value: 1E18,
      symbol: 'E'
    },
    {
      value: 1E15,
      symbol: 'P'
    },
    {
      value: 1E12,
      symbol: 'T'
    },
    {
      value: 1E9,
      symbol: 'G'
    },
    {
      value: 1E6,
      symbol: 'M'
    },
    {
      value: 1E3,
      symbol: 'k'
    }
  ]
  for (let i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (num / si[i].value).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol
    }
  }
  return num.toString()
}

/**
 * 小写金额转为大写
 * @param {String} money 
 * @returns 
 */
export function convertCurrency(money) {
  //汉字的数字
  var cnNums = new Array('零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖');
  //基本单位
  var cnIntRadice = new Array('', '拾', '佰', '仟');
  //对应整数部分扩展单位
  var cnIntUnits = new Array('', '万', '亿', '兆');
  //对应小数部分单位
  var cnDecUnits = new Array('角', '分', '毫', '厘');
  //整数金额时后面跟的字符
  var cnInteger = '整';
  // var cnInteger = '';
  //整型完以后的单位
  var cnIntLast = '元';
  //最大处理的数字
  var maxNum = 999999999999999.9999;
  //金额整数部分
  var integerNum;
  //金额小数部分
  var decimalNum;
  //输出的中文金额字符串
  var chineseStr = '';
  //分离金额后用的数组，预定义
  var parts;
  if (money === '' || money === null || money === undefined) {
    return '';
  }
  money = parseFloat(money);
  if (money >= maxNum) {
    //超出最大处理数字
    return '';
  }
  if (money == 0) {
    chineseStr = cnNums[0] + cnIntLast + cnInteger;
    return chineseStr;
  }
  //转换为字符串
  money = money.toString();
  if (money.indexOf('.') == -1) {
    integerNum = money;
    decimalNum = '';
  } else {
    parts = money.split('.');
    integerNum = parts[0];
    decimalNum = parts[1].substr(0, 4);
  }
  //获取整型部分转换
  if (parseInt(integerNum, 10) > 0) {
    var zeroCount = 0;
    var IntLen = integerNum.length;
    for (var i = 0; i < IntLen; i++) {
      var n = integerNum.substr(i, 1);
      var p = IntLen - i - 1;
      var q = p / 4;
      var m = p % 4;
      if (n == '0') {
        zeroCount++;
      } else {
        if (zeroCount > 0) {
          chineseStr += cnNums[0];
        }
        //归零
        zeroCount = 0;
        chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
      }
      if (m == 0 && zeroCount < 4) {
        chineseStr += cnIntUnits[q];
      }
    }
    chineseStr += cnIntLast;
  }
  //小数部分
  if (decimalNum != '') {
    var decLen = decimalNum.length;
    for (var i = 0; i < decLen; i++) {
      var n = decimalNum.substr(i, 1);
      if (n != '0') {
        chineseStr += cnNums[Number(n)] + cnDecUnits[i];
      } else {
        chineseStr += cnNums[Number(n)] + cnDecUnits[i];
      }
    }
  }
  if (chineseStr == '') {
    chineseStr += cnNums[0] + cnIntLast + cnInteger;
  } else if (decimalNum == '') {
    chineseStr += cnInteger;
  }
  return chineseStr;
}

export function selfNumber(val) { 
  if (val === null || val === undefined || val === "") { 
    return 0
  } else {
    return Number(val)
  }
}

export function isNull(val) { 
  if (val === null || val === undefined || val === "" || val === 0 || val === "0") { 
    return true
  } else {
    return false
  }
}
