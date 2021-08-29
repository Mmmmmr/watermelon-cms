import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface MIRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (err: any) => any
}

export interface MIRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: MIRequestInterceptors<T>
  showLoading?: boolean
}
