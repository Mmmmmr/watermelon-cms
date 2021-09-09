import miRequest from '@/service'

import { IDataType } from '@/service/types'

export function getPageListData(url: string, queryInfo: any) {
  return miRequest.post<IDataType>({
    url,
    data: queryInfo
  })
}
