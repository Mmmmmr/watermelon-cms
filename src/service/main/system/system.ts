import miRequest from '@/service'

import { IDataType } from '@/service/types'

export function getPageListData(url: string, queryInfo: any) {
  return miRequest.post<IDataType>({
    url,
    data: queryInfo
  })
}

export function deletePageData(url: string) {
  return miRequest.delete<IDataType>({
    url
  })
}

export function createPageData(url: string, newData: any) {
  return miRequest.post<IDataType>({
    url: url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return miRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}
