import axios from 'axios';
import {
  Notification,
  Message,
  MessageBox
} from 'element-ui';
//路由配置
import router from '@/router'
import * as cookieFn from '@/utils/cookie.js';
import store from '@/store/index' //vuex

import md5 from "js-md5"
import aes from "@/utils/aes"
window.pendingRequest = new Map()
const service = axios.create({
  baseURL: process.env.VUE_APP_API,//ip
  timeout: 600000,//超时
})

//http response 拦截器
service.interceptors.response.use(
  //code == 200
  response => {
    console.log(response,"相应信息")
        //////////////////////////////////////////////////////////////
        const {url,method,params,data} = response.config
        let key = [url, method, JSON.stringify(data), JSON.stringify(params)].join('&')
        for (let key of pendingRequest.keys()) {
          console.log(key,"遍历");
        }
        if (pendingRequest.has(key)) {
          console.log("相应信息有key",key)
          pendingRequest.delete(key) // 请求对象中删除requestKey
        }else{
          console.log("相应信息没有key",key)
        }
        //////////////////////////////////////////////////////////////
    // console.log(response.config.url,"response.config")
      // if (response.config.method == "post") {
      //     response.data.data = JSON.parse(aes.decrypt(response.data.data))
      //     return Promise.resolve(data)
      // }
    const code = response.data.code;
    if (code != 200) {
      Notification.error({ title:`${response.config.url }接口报错:${response.data.info }` })
    }
    if (response.status === 200) { // 如果状态码是200  会执行.then的第一个函数
      return Promise.resolve(response.data)
    } else { //除了200 在2xx的范围 会执行.then的第二个函数  Promise.reject(res)  1
      return Promise.reject(response)
    }
      // //token失效
      // else if (code == 401) {
      //   if (!store.state.config.alert401) {
      //     store.state.config.alert401 = true;
      //     MessageBox.alert("未授权，请重新登录", "提示", {
      //       confirmButtonText: '确定',
      //       callback: action => {
        //store.state.config.alert401 = false;
      //         cookieFn.removeCookie(process.env.VUE_APP_TOKEN);
      //         router.push({
      //           path: '/login'
      //         });

      //       }
      //     })
      //   }
      // }
  },
  //code != 200
  err => {
    console.log(err,"错误信息")
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '错误请求'
          break;
        case 401:
          if (!store.state.config.alert401) {
            store.state.config.alert401 = true;
            MessageBox.alert("未授权，请重新登录", "提示", {
              confirmButtonText: '确定',
              callback: action => {
                store.state.config.alert401 = false;
                removeCookie(process.env.VUE_APP_TOKEN);
                router.push({
                  path: '/login'
                });

              }
            })
          }
          break;
        case 403:
          err.message = '拒绝访问'
          break;
        case 404:
          err.message = '请求错误,未找到该资源'
          break;
        case 405:
          err.message = '请求方法未允许'
          break;
        case 408:
          err.message = '请求超时'
          break;
        case 500:
          err.message = '服务器端出错'
          break;
        case 501:
          err.message = '网络未实现'
          break;
        case 502:
          err.message = '网络错误'
          break;
        case 503:
          err.message = '服务不可用'
          break;
        case 504:
          err.message = '网络超时'
          break;
        case 505:
          err.message = 'http版本不支持该请求'
          break;
        default:
          err.message = `连接错误${err.response.status}`
      }
    } else {
      if(err.message){

      }else{
        err.message = "连接到服务器失败"
      }
      
    }
    Notification.error({ title:`${err.message}` })
    return Promise.reject(err.response);
  }
)

//请求拦截器
service.interceptors.request.use(
  config => {
    //////////////////////////////////////////////////////////////
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    config.cancelToken = source.token
    const {url,method,params,data} = config
    // console.log([url, method, JSON.stringify(data), JSON.stringify(params)],"123")
    let key = [url, method, JSON.stringify(data), JSON.stringify(params)].join('&')
    if (pendingRequest.has(key)) {
      console.log("有key",key)
      source.cancel(`当前接口还未返回数据 请返回数据再操作`)
      // pendingRequest.delete(key) // 请求对象中删除requestKey
    }else{
      console.log("没有key",key)
      pendingRequest.set(key, "1")
    }
    //////////////////////////////////////////////////////////////

    config.headers = { //配置请求token
      "Authorization": cookieFn.getCookie(process.env.VUE_APP_TOKEN) || ""
    }

    /*
    某些需要再链接后面带一个标识
    */
    // if (config.method == "get") {
    //   if (config.url.includes("?")) {
    //     config.url = config.url + `&timestamp=${new Date().getTime()}`
    //   } else {
    //     config.url = config.url + `?timestamp=${new Date().getTime()}`
    //   }
    // }

     /*
    加密
    */
    // let Pdata = {
    //     "appid": process.env.VUE_APP_AES_APPID,
    //     "p": aes.encrypt(JSON.stringify(config.data)),
    //     "sign": md5(JSON.stringify(config.data) + process.env.VUE_APP_AES_SIGN).toUpperCase(),
    // }
    // console.log(Object.assign(Pdata, config.data),"Object.assign(Pdata, config.data)")
    // config.data = Object.assign(Pdata, config.data)
    console.log(config,"config")
    return config;
  },
  error => {
    return Promise.reject(error);
  }
)


export default service;
