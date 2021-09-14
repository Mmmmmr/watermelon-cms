export const contentTableConfig = {
  title: '用户列表',
  propList: [
    { prop: 'name', label: '姓名', minWidth: '100' },
    { prop: 'cellphone', label: '电话', minWidth: '100' },
    {
      prop: 'enable',
      label: '是否启用',
      minWidth: '100',
      slotName: 'status'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '100',
      slotName: 'createTime'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '100',
      slotName: 'updateTime'
    }
  ],
  showIndexColum: true,
  showSelectColumn: true
}
