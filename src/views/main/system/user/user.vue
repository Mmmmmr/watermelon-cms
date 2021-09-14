<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <div class="content">
      <mi-table :listData="userList" :propList="propList">
        <template #status="scope">
          <div>{{ scope.row.enable }}</div>
        </template>
        <template #createTime="scope">
          <div>{{ $filters.formatTime(scope.row.createAt) }}</div>
        </template>
        <template #updateTime="scope">
          <div>{{ $filters.formatTime(scope.row.updateAt) }}</div>
        </template>
      </mi-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import PageSearch from '@/components/page-search'
import MiTable from '@/base-ui/table'
import { searchFormConfig } from './config/search.config'
import { useStore } from '@/store'
export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    MiTable
  },
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)

    const propList = [
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
    ]
    return {
      searchFormConfig,
      userList,
      userCount,
      propList
    }
  }
})
</script>

<style scoped></style>
