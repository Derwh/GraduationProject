// 创建axios实例
// 请求拦截器，如果有token则进行头部携带
// 响应拦截器：剥离无效数据，处理token失效
// 导出一个函数，调用当前的axios实例的请求，返回值为promise

import axios from 'axios'
import store from '@/store'
import router from '@/router'

// 基准地址，暂时使用给予的，后期更换成后端接口。该地址为导出地址，目的是其它地方不是使用axios的也可以使用这个基准地址
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'

const instance = axios.create({
    // axios的一些配置
    baseURL,
    timeout: 5000
})

instance.interceptors.request.use(config => {
    // 拦截业务逻辑
    // 进行请求配置的修改
    // 本地有token就在头部携带

    // 获取用户信息对象
    const { profile } = store.state.user
    // 判断是否有token
    if (profile.token) {
        // 设置token
        config.headers.Authorization = `Bearer ${profile.token}`
    }

    return config
}, err => { // 拦截错误时的处理逻辑
    return Promise.reject(err)
})

// 取出data数据，调用接口时拿到的就是后端的数据
instance.interceptors.response.use(res => res.data, err => { // 响应错误处理
    // 401状态码，进入该函数
    if (err.response && err.response.status === 401) {
        // 清空无效用户信息
        store.commit('user/setUser', {})
        // 获取当前完整路由地址，同时对参数中的特殊字符（&之类的）进行转码
        const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
        // 跳转到登录页面，传参（当前路由地址）给登录页面
        router.push('/login?redirectUrl=' + fullPath)
    }
    return Promise.reject(err)
})

// 请求工具函数
export default (url, method, submitData) => {
    // 负责发请求，包括请求地址，请求方式，提交的数据
    return instance({
        url,
        method,
        // 因为请求方式的不同导致key的不同，所以使用[]来设置一个动态key
        // 统一将methon转换为小写，防止有大写的情况导致判断出错
        [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
    })
}
