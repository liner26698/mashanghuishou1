import axios from 'axios'
import {
    downloadGet,
    downloadPost
} from "./exportExcel"
import {
    baseUrl
} from './env'
// import qs from 'qs'

// axios 配置
axios.defaults.timeout = 0


axios.interceptors.response.use(
    response => {
        if (response.headers['content-type']) {
            if (response.headers['content-type'] === 'application/octet-stream' || response.headers['content-type']==="application/vnd.ms-excel;charset=UTF-8") {
                const config = response.config
                if (config.method === 'post') {

                } else if (config.method === 'get') {
                    downloadGet(config)
                }
            }

        }

        return response
    },
    error => {
        if (error.response) {
            console.log(error)
        }
        return Promise.reject({
            message: '网络异常请稍后再试！'
        })
    }
)

// 封装请求
export default function fetch(url, options, type) {
    url = baseUrl + url
    let opt = options || {}
    return new Promise((resolve, reject) => {
        axios({
                withCredentials: true,
                method: type,
                url: url,
                params: (type === 'GET' || type === 'get') ? opt : {},
                //   data: (type === 'POST' || type === 'post') ? qs.stringify(opt) : {},
                data: (type === 'POST' || type === 'post') ? opt : {}, // 此项目 post 数据不需要序列化
                responseType: 'json',
                // 设置默认请求头
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'  // 返回415
                }
            })
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error)
            })
    })
}

// 解释一下封装的具体内容：
// 1、请求的url、参数、格式等都可以通过参数传递；
// 2、判断返回的状态码：response.data.code，统一处理成功和错误，具体的code可以自行配置；
// 3、可以在store中定义一个设置loading的action，发请求时显示，在这里统一做隐藏;
// 4、设置了response拦截器，统一处理http状态码。

// 使用的时候引入fetch模块，传入参数即可发送请求
//    fetch('你的url', {
//     params: {
//       '参数名'：'参数值'
//     }
//  })