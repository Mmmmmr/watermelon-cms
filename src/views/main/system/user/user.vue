<template>
  <div class="user">
    <page-search
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
      :searchFormConfig="searchFormConfig"
    ></page-search>
    <page-content
      ref="pageContentRef"
      pageName="users"
      :contentTableConfig="contentTableConfig"
    >
      <template #status="scope">
        <span>{{ scope.row.status === 1 ? '启用' : '禁用' }}</span>
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

import { usePageSearch } from '@/hooks/usePageSearch'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    return {
      pageContentRef,
      handleResetClick,
      handleQueryClick,
      searchFormConfig,
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
