<template>
  <div class="page-content">
    <mi-table :listData="dataList" v-bind="contentTableConfig">
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
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import MiTable from '@/base-ui/table'
import { useStore } from '@/store'

export default defineComponent({
  components: {
    MiTable
  },
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )
    // const userCount = computed(() => store.state.system.userCount)

    return {
      dataList
    }
  }
})
</script>

<style scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
