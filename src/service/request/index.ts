import axios from 'axios'
import type { AxiosRequestConfig, AxiosInstance } from 'axios'
import type { MIRequestConfig, MIRequestInterceptors } from './type'

class MIRequest {
  instance: AxiosInstance
  interceptors?: MIRequestInterceptors

  constructor(config: MIRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    this.instance.interceptors.request.use(
      (config) => {
        console.log('全局请求拦截')
        return config
      },
      (err) => {
        console.log('全局请求错误拦截')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        console.log('全局响应错误拦截')
        return err
      }
    )
  }

  request(config: MIRequestConfig): void {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors?.requestInterceptor(config)
    }

    this.instance.request(config).then((res) => {
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors?.responseInterceptor(res)
      }
    })
  }
}

export default MIRequest
