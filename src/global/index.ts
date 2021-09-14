import { App } from 'vue'

import registerElment from './register-element'
import registerProperties from './register-properties'

export function globalRegister(app: App): void {
  app.use(registerElment)
  app.use(registerProperties)
}
