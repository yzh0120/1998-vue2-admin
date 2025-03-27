import {
  MessageBox
} from "element-ui";



// 获取主页面(index.html)中的所有script标签
const getScriptList = async () => {
  const reg = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi
  const res = await fetch(`/face/?_t=${Date.now()}`).catch((e) => {
    console.log(e, "自动更新报错信息")
  })
  const data = await res.text()
  return data.match(reg)
}

// 2 检查是否有更新
const checkUpdate = async () => {
  const lastFingerprint = localStorage.getItem('lastFingerprint') //旧的
  const scriptList = await getScriptList()
  const scriptListStr = scriptList.join(',') //新的

  //取出最后一次记录的指纹跟最新的做比较，如果不相同，则视为有更新 
  console.info(lastFingerprint, "旧的1", scriptListStr, "新的1")
  if (lastFingerprint && lastFingerprint !== scriptListStr) {
    if(lastFingerprint){
      const message = `
      <div>尊敬的用户，检测到系统功能有更新!</div>
      <div>为了您的高效体验，请<span style="color:#e6a23c;font-weight: 700">确认页面数据已保存</span>后刷新页面，</div>
      <div>防止数据丢失！</div>
      `
MessageBox.confirm(message, "更新提示", {
confirmButtonText: '立即刷新',
cancelButtonText: '已知晓，稍后手动刷新',
type: 'success',
dangerouslyUseHTMLString: true,
}).then(() => {
//使用本地存储记录最后一次更新指纹
localStorage.setItem("lastFingerprint", scriptListStr)
window.location.reload()
})
    }else{
      localStorage.setItem("lastFingerprint", scriptListStr)
    }

  }
}
const listenerUpdate = () => {
  checkUpdate()
  setInterval(checkUpdate, 1000 * 60)
}
console.info(process.env.VUE_APP_ENV, "process.env.VUE_APP_ENV")
// //1 生产环境下执行监听自动更新
if (process.env.VUE_APP_ENV === 'production' || process.env.VUE_APP_ENV === 'test' || process.env.VUE_APP_ENV === 'uat') {
  listenerUpdate()
}
// listenerUpdate()