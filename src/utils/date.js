import dayjs from "dayjs";
import XEUtils, {
  toNumber
} from "xe-utils";



/////////////////////////////////////////////////////////////////////////////////////

/**
 * 返回指定单位下两个日期时间之间的差异。
 * @param {*} val1 需要比较的日期（传入的日期）
 * @param {*} val2 目标日期，默认为当天
 * @param {*} type 返回的日期格式（day,week,quarter,month,year,hour,minute,second,millisecond）
 * @returns dayjs('2019-01-25').diff('2019-01-26', 'day') //-1
 */
export function datediff(val1, val2 = dayjs(), type = "day") {
  if (val1 && val2) {
    return dayjs(val1).diff(val2, type)
  }
}

/**
 * 返回增加一定时间的复制的 Day.js 对象
 * @param {*} date 目标日期，默认为当天
 * @param {*} number 需要增加的数值
 * @param {*} type 需要增加的类型（day,week,quarter,month,year,hour,minute,second,millisecond）
 * @param {*} number 需要格式化的类型，默认为YYYY-MM-DD
 * @returns dayjs().add(7, 'day').format("YYYY-MM-DD") //"2021-08-27"
 * YY	18	两位数的年份
  YYYY	2018	四位数的年份
  M	1-12	月份，从 1 开始
  MM	01-12	月份，两位数
  MMM	Jan-Dec	缩写的月份名称
  MMMM	January-December	完整的月份名称
  D	1-31	月份里的一天
  DD	01-31	月份里的一天，两位数
  d	0-6	一周中的一天，星期天是 0
  dd	Su-Sa	最简写的星期几
  ddd	Sun-Sat	简写的星期几
  dddd	Sunday-Saturday	星期几
  H	0-23	小时
  HH	00-23	小时，两位数
  h	1-12	小时, 12 小时制
  hh	01-12	小时, 12 小时制, 两位数
  m	0-59	分钟
  mm	00-59	分钟，两位数
  s	0-59	秒
  ss	00-59	秒 两位数
  SSS	000-999	毫秒 三位数
  Z	+05:00	UTC 的偏移量，±HH:mm
  ZZ	+0500	UTC 的偏移量，±HHmm
  A	AM PM	
  a	am pm
 */
export function addDate(number, type = "day", date = dayjs(), formatType = "YYYY/MM/DD") {
  if (date) {
    return dayjs(date).add(number, type).format(formatType)
  }
}

/**
 * 返回减去一定时间的复制的 Day.js 对象
 * @param {*} date 目标日期，默认为当天
 * @param {*} number 需要减去的数值
 * @param {*} type 需要减去的类型（day,week,quarter,month,year,hour,minute,second,millisecond）
 * @param {*} number 需要格式化的类型，默认为YYYY-MM-DD
 * @returns dayjs().subtract(7, 'day').format("YYYY-MM-DD") //"2021-08-13"
 */
export function subtractDate(date = dayjs(), number, type = "day", formatType = "YYYY-MM-DD") {
  if (date) {
    return dayjs(date).subtract(number, type).format(formatType)
  }
}
