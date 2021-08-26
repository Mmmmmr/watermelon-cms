const rules = {
  name: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{3,9}$/,
      message: '长度在 3 到 9 个字符',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '长度在 3 个字符以上',
      trigger: 'blur'
    }
  ]
}

export { rules }
