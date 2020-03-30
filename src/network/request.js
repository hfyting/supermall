import axios from 'axios'

// 推荐的写法
export function request(config) {
    // 1.创建实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000/api/h3',
        timeout: 100000
    })

    // 2.axios的拦截器
    // 2.1 请求拦截
    instance.interceptors.request.use(config => {
        // console.log(config)

        // 比如config中的一些信息不符合服务器的要求
        // 每次发送网络请求时，都希望在界面中显示请求的图标
        // 某些网络请求必须携带一些特殊的信息，比如登录，要携带token
        
        // 拦截之后一定要记得return
        return config

    })

    // 2.2 响应拦截
    instance.interceptors.response.use(res => {

        // 拦截之后一定要记得return
        return res.data
    },err => {
        console.log(err)
    })

    // 3. 发送真正的网络请求
    // return的就是一个Promise对象
    return instance(config)

}




