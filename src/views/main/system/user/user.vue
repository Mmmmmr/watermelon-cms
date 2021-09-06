<template>
  <div class="user">
    <mi-form v-bind="searchFormConfig"></mi-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import MiForm from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'
export default defineComponent({
  name: 'user',
  components: {
    MiForm
  },
  setup() {
    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped></style>
