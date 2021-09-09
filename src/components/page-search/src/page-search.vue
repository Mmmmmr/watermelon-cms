<template>
  <div class="page-search">
    <mi-form v-bind="searchFormConfig" v-model="formData">
      <template #header><h1 class="header">高级搜索</h1></template>
      <template #footer>
        <div class="handle-btns">
          <el-button icon="el-icon-refresh">重置</el-button>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
      </template>
    </mi-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import MiForm from '@/base-ui/form'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      require: true
    }
  },
  components: {
    MiForm
  },
  setup() {
    const formData = ref({
      account: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return {
      formData
    }
  }
})
</script>

<style lang="less" scoped>
.header {
  color: red;
}
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
