import axios from 'axios'

// 创建实例时设置配置的默认值
const instance = axios.create({
  timeout: 10000
})

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    return {
      ...config,
      headers: {
        ...config.headers
      },
      params: {
        ...config.params,
        _t: Date.now()
      }
    }
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    const { data } = response
    return Promise.resolve(data)
  },
  function (error) {
    if (error && error.response) {
      const { data } = error.response
      return Promise.reject(data.error ? data.error : data)
    } else {
      // message.error('连接服务器失败')
      return Promise.reject(error)
    }
  }
)

export default instance
