/*
httpService.interceptors.request.use(
    config => {
        // 取消重复请求
        cancelRepeatRequest(config)
        // 添加请求到队列
        addPendingRequest(config)
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)
————————————————

                            版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。
                        
原文链接：https://blog.csdn.net/shanghai597/article/details/141132511
*/ 
import axios from 'axios';


// 全局变量对象，专门存放所有请求的cancel方法
window.pendingRequest = new Map()

// 生成request的唯一的标识
const generateRequestKey = (config = {}) => {
    // 通过url，method，params，data生成唯一key，用于判断是否重复请求
    // params为get请求参数，data为post请求参数
    const {url,method,params,data} = config
    if (method == 'get') {
        return [url, method, qs.stringify(params)].join('&')
    }
    return [url, method, qs.stringify(data)].join('&')
}

// 将重复请求添加到pendingRequest中
const addPendingRequest = (config) => {
    const key = generateRequestKey(config)
    if (!pendingRequest.has(key)) {
        config.cancelToken = new axios.CancelToken(cancel => {
            pendingRequest.set(key, cancel)
        })
    }
}

// 取消重复请求
const cancelRepeatRequest = (config) => {
    const key = generateRequestKey(config)
    if (pendingRequest.has(key)) {
        const cancelToken = pendingRequest.get(key)
        cancelToken(key) // 取消之前发送的请求
        pendingRequest.delete(key) // 请求对象中删除requestKey
    }
}
