import {
  ElAside,
  ElAvatar,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElButton,
  ElCheckbox,
  ElCol,
  ElContainer,
  ElDatePicker,
  ElDialog,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElForm,
  ElFormItem,
  ElHeader,
  ElImage,
  ElInput,
  ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElOption,
  ElPagination,
  ElRow,
  ElSelect,
  ElSubmenu,
  ElTable,
  ElTableColumn,
  ElTabPane,
  ElTabs
} from 'element-plus'
import { App } from 'vue'
import 'element-plus/lib/theme-chalk/base.css'

const components = [
  ElButton,
  ElInput,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubmenu,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElAvatar,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElImage,
  ElDialog
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
