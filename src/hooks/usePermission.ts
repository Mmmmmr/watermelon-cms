import { useStore } from '@/store'

export function usePermission(propName: string, hanldeName: string): boolean {
  const store = useStore()

  const permissions = store.state.login.permissions

  const verifyPermission = `system:${propName}:${hanldeName}`
  return !!permissions.find((item) => item === verifyPermission)
}
