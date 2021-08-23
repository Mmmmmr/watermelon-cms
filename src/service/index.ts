import MIRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const miRequest = new MIRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('请求拦截')
      return config
    },
    requestInterceptorCatch: (config) => {
      console.log('请求错误')
      return config
    },
    responseInterceptor: (config) => {
      console.log('响应拦截')
      return config
    },
    responseInterceptorCatch: (config) => {
      console.log('响应错误')
      return config
    }
  }
})

export default miRequest
