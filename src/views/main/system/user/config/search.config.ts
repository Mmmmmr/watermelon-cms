import type { IFrom } from '@/base-ui/form/types'
export const searchFormConfig: IFrom = {
  formItems: [
    {
      field: 'account',
      label: '账号',
      type: 'input',
      placeholder: '请输入账号'
    },
    {
      field: 'password',
      label: '密码',
      type: 'password',
      placeholder: '请输入密码'
    },
    {
      field: 'sport',
      label: '最喜欢的运动',
      type: 'select',
      placeholder: '请选择运动',
      options: [
        { label: '足球', value: 'football' },
        { label: '篮球', value: 'basketball' }
      ]
    },
    {
      field: 'createTime',
      label: '创建时间',
      type: 'datepicker',
      otherOptions: {
        type: 'daterange',
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间'
      }
    }
  ],
  labelWidth: '120px',
  itemLayout: {
    padding: '10px 10px'
  },
  colLayout: { span: 8 }
}
