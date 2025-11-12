import { lazy } from 'react'
import { type RouteObject, useRoutes } from 'react-router-dom'

const Home = lazy(() => import('@/Home'))
const NotFound = lazy(() => import('@/shared/components/status/NotFound'))

export default function DynamicRouter({ routes }: { routes: RouteObject[] }) {
    // 检查是否已经存在首页路由
    const hasHomeRoute = routes.some(route => route.path === '/')

    // 构建路由配置，避免重复添加首页路由
    const routerConfig: RouteObject[] = [
        ...routes,
        // 只有当不存在首页路由时才添加默认首页
        ...(!hasHomeRoute ? [{ path: '/', element: <Home /> }] : []),
        // 始终添加404路由，但放在最后
        { path: '*', element: <NotFound /> },
    ]

    return useRoutes(routerConfig)
}
