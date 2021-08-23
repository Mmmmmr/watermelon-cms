import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface MIRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (err: any) => any
}

export interface MIRequestConfig extends AxiosRequestConfig {
  interceptors?: MIRequestInterceptors
}
