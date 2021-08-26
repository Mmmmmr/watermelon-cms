<template>
  <div class="login-account">
    <el-form :model="account" ref="formRef" label-width="60px" :rules="rules">
      <el-form-item label="账号" required prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" required prop="password">
        <el-input v-model="account.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { ElForm } from 'element-plus'

import { rules } from '../config/account-config'
export default defineComponent({
  setup() {
    const account = reactive({
      name: '',
      password: ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = () => {
      formRef.value?.validate((valid) => {
        console.log(valid)
      })
    }

    return {
      account,
      loginAction,
      formRef,
      rules
    }
  }
})
</script>

<style scoped></style>
