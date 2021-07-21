import axios from 'axios'

// 创建实例时设置配置的默认值
const instance = axios.create({
  timeout: 10000
})

// 展示错误信息
function parseErrMsg (errorObj: any, status: number) {
  const { error } = errorObj
  // 服务端没有返回错误信息的情况时的一些提示
  if (!error || !(error.details instanceof Array)) {
    switch (status) {
      case 400:
        return '客户端请求错误(400)'
      case 401:
        // 跳转页面
        return '未授权，请重新登录(401)'
      case 403:
        // 跳转页面
        return '拒绝访问(403)'
      case 404:
        return '请求资源不存在(404)'
      case 500:
        return '服务器错误(500)'
      default:
        return `其他错误(${error.response.status})!`
    }
  }
  let str = ''
  let code_str = ''
  // https://cloud.google.com/apis/design/errors
  error && error.details.forEach((item: any) => {
    if (item['@type'] === 'type.googleapis.com/google.rpc.ErrorInfo') {
      code_str = item.reason
    }
    if (item['@type'] === 'type.googleapis.com/google.rpc.LocalizedMessage') {
      str = item.message
    }
  })
  if (str && !code_str) {
    return str
  } else if (!str && code_str) {
    return code_str
  } else {
    return error.message
  }
}

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
      const { data, status } = error.response
      // message.error(parseErrMsg(data, status))
      return Promise.reject(data.error ? data.error : data)
    } else {
      // message.error('连接服务器失败')
      return Promise.reject(error)
    }
  }
)

export default instance
