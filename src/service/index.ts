import MIRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import localCache from '@/utils/cache'

const miRequest = new MIRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = localCache.getCache('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (config) => {
      return config
    },
    responseInterceptor: (config) => {
      return config
    },
    responseInterceptorCatch: (config) => {
      return config
    }
  }
})

export default miRequest
