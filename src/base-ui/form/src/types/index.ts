type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  type: IFormType
  label: string
  placeholder?: any
  options?: any[]
  otherOptions?: any
}

export interface IFrom {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout: any
  itemLayout: any
}
