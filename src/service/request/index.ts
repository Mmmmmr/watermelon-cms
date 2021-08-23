import axios from 'axios'
import type { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios'
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
  }

  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export default MIRequest
