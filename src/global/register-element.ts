import { ElButton, ElInput, ElAlert, ElAvatar } from 'element-plus'
import { App } from 'vue'
import 'element-plus/lib/theme-chalk/base.css'

const components = [ElButton, ElInput, ElAlert, ElAvatar]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
