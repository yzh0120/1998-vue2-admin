/*
 * @Author: wjs
 * @Date: 2022-02-18 12:37:13
 * @Description: 文件管理操作方法
 * @FilePath: \oaweb\src\api\file.js
 * 
 */
import oarequest from "@/utils/request";
import axios from 'axios';
import * as cookieFn from '@/utils/cookie.js';

import {
  Message,
  MessageBox
} from 'element-ui';





//下載文件流 默认get 导出
export function download(params = {}, downloadUrl, method = "get") {
  let msg = Message({
    message: "正在下载文件，请稍等",
    type: 'warning',
    duration: 0
  })
  let headers = {
    'Authorization': "Bearer " + cookieFn.getCookie(process.env.VUE_APP_TOKEN),
  }
  let finallyUrl  = "/system/file_annexes/download"
  if (downloadUrl) {
    finallyUrl = downloadUrl//type
  }

  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: finallyUrl,
      baseURL: process.env.VUE_APP_API,
      params: params,
      data: params,
      responseType: 'blob',
      headers: headers
    }).then(response => {
      msg.close(); //关闭提示弹窗
      //兼容blob下载出错json提示//////////////////////////////////
      if (response.request.responseType === 'blob' && response.data instanceof Blob && response.data.type && response.data.type.toLowerCase().indexOf('json') != -1) {
        reject("blob下载出错json提示")
        // 兼容blob下载出错json提示
        let reader = new FileReader()
        reader.onload = () => {
          response.data = JSON.parse(reader.result);
          Message({
            message: response.data.info,
            type: 'warning',
            duration: 2000
          })
        }
        reader.readAsText(response.data)
        return;
      }
      ////////////////////////////////////
      let blob = new Blob([response.data]);
      let objectUrl = URL.createObjectURL(blob);
      let link = document.createElement("a");
      link.style.display = "none";
      link.href = objectUrl;
      ////////////////////////////////////
      if (response.headers.filename) {
        link.setAttribute("download", decodeURIComponent(response.headers.filename));
      } else {
        link.setAttribute("download", decodeURIComponent(response.headers["content-disposition"].split("filename=")[1]));
      }
      // link.setAttribute("download", decodeURIComponent(response.headers["content-disposition"].split("filename=")[1]));
      document.body.appendChild(link);
      link.click();

      resolve("成功")
    }).catch(err => {
      // Message({
      //   message: err,
      //   type: 'warning',
      //   duration: 2000
      // })
      console.log(err, "err")
      msg.close();
      reject(err)
    })
  })


}



/**
 * 通过url下载文件并对下载的文件更名 是url下载文件流升级版
 * @param {*} url
 * @param {*} filename
 */
export const download_url = (url, filename) => {
  function getBlob(url) {
    return new Promise(resolve => {
      const XML = new XMLHttpRequest();
      XML.open('GET', url, true);
      XML.responseType = 'blob';
      XML.onload = () => {
        if (XML.status === 200) {
          resolve(XML.response);
        }
      };
      XML.send();
    });
  }

  //下载文件
  function saveAs(blob, filename) {
    const elelink = document.createElement("a");
    elelink.style.display = 'none';
    elelink.download = filename;
    elelink.href = window.URL.createObjectURL(blob);
    document.body.appendChild(elelink);
    elelink.click();
    document.body.removeChild(elelink);
  }

  // 调用以上方法进行下载
  getBlob(url).then(blob => {
    saveAs(blob, filename);
  });
}


//通过ids删除文件
export function removeByIds(data) {
  return oarequest({
    url: "/system/file_annexes/removeByIds",
    method: "post",
    params: data
  })
}
//通过id获取文件
export function getById(data) {
  return oarequest({
    url:"/infra/file/get",
    method: "get",
    params: data
  })
}

//folderId获取文件列表
export function queryList(data) {
  return oarequest({
    url: "/system/file_annexes/queryList",
    method: "post",
    data: data
  })
}


//上传文件  感觉没用了
// export function uploadFile(formData, pathUrl) {
//   let headers = {
//     'Authorization': "Bearer " + cookieFn.getCookie(process.env.VUE_APP_TOKEN),
//     'content-type': 'multipart/form-data'
//   }
//   let url = "/system/file_annexes/uploadFile"
//   if (pathUrl) {
//     url = pathUrl
//   }

//   return axios({
//     baseURL: process.env.VUE_APP_API,
//     url: url,
//     method: 'post',
//     headers: headers,
//     data: formData,
//   })
// }


//url下载文件流
// export async function download_url(url) {

//   let type = url.split("/").pop()
//   const x = new window.XMLHttpRequest();
//   x.open('GET', url, true);
//   x.responseType = 'blob';
//   x.onload = () => {
//     // let time = new Date().toLocaleDateString();
//     const url = window.URL.createObjectURL(x.response);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = type;
//     a.click();
//   };
//   x.send()

// }
