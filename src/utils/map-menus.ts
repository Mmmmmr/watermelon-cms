import { RouteRecordRaw } from 'vue-router'
import { IBreadcrumb } from '@/base-ui/breadcrumb/types'

let firstMenu: any = null

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  const allroutes: RouteRecordRaw[] = []

  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    allroutes.push(route.default)
  })

  const _recurseGetRoute = (menus: any[]): void => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allroutes.find((route) => route.path === menu.url)
        if (route) {
          routes.push(route)
        }
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)
  return routes
}

export function pathMapBreadcrumps(userMenus: any[], currentPath: string) {
  const breadcrumps: IBreadcrumb[] = []
  pathToMenu(userMenus, currentPath, breadcrumps)
  return breadcrumps
}

export function pathToMenu(
  userMenus: any[],
  currentPath: string,
  breadcrumps?: IBreadcrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumps?.push({ name: menu.name, path: menu.url })
        breadcrumps?.push({ name: findMenu.name, path: findMenu.url })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

export function mapMenusToPermissions(userMenus: any[]) {
  const permissions: string[] = []

  const _recurseGetPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 3) {
        permissions.push(menu.permission)
      } else {
        _recurseGetPermission(menu.children ?? [])
      }
    }
  }

  _recurseGetPermission(userMenus)

  return permissions
}

export { firstMenu }
