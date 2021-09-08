<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldClick"
    ></i>
    <div class="content">
      <mi-breadcrumb :breadcrumbs="breadcrumbs"></mi-breadcrumb>
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useRoute } from 'vue-router'

import { useStore } from '@/store'
import UserInfo from './user-info.vue'
import MiBreadcrumb from '@/base-ui/breadcrumb'
import { pathMapBreadcrumps } from '@/utils/map-menus'

export default defineComponent({
  components: {
    UserInfo,
    MiBreadcrumb
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    const store = useStore()

    const route = useRoute()

    const breadcrumbs = computed(() => {
      const useMenus = store.state.login.userMenus
      const currentPath = route.path
      return pathMapBreadcrumps(useMenus, currentPath)
    })

    return {
      isFold,
      handleFoldClick,
      breadcrumbs
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;

  .fold-menu {
    cursor: pointer;
    font-size: 30px;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
