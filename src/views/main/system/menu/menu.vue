<template>
  <div class="menu">
    <page-content
      pageName="menu"
      :contentTableConfig="contentTableConfig"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { contentTableConfig } from './config/content.config'
import PageContent from '@/components/page-content'

export default defineComponent({
  name: 'system-menu',
  components: {
    PageContent
  },
  setup() {
    return {
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
