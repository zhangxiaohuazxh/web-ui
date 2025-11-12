// @ts-nocheck
import { lazy, LazyExoticComponent, type ReactElement, Suspense } from 'react'
import { type Route as RouteType } from '#/request/routes.ts'
import { Outlet, type RouteObject } from 'react-router-dom'

// @ts-ignore
// 这种写法脚手架总是会提示错误，但是运行是正常的
// const lazyLoad = (path: string) => lazy(() => import(`../features/${path}`))

const modules = import.meta.glob('../features/**/*.tsx')

const lazyLoad = (path: string) => {
    const fullPath =
        path?.startsWith('/') ?
            `../features${path}.tsx`
        :   `../features/${path}.tsx`
    if (modules[fullPath]) {
        return lazy(modules[fullPath])
    } else {
        return lazy(() =>
            Promise.reject(new Error(`Module not found: ${fullPath}`)),
        )
    }
}

const Loading = () => <div>加载中...</div>

const lazyImportComponent = (props: {
    lazyChildren: LazyExoticComponent<() => JSX.Element>
}) => {
    return (
        <Suspense fallback={<Loading />}>
            <props.lazyChildren />
        </Suspense>
    )
}

function BlankLayout(): ReactElement {
    return <Outlet />
}

const flatMap = (routes: RouteType[]): RouteObject[] => {
    return routes.map(route => {
        return {
            path: route.path,
            element:
                route?.component ?
                    lazyImportComponent({
                        lazyChildren: lazyLoad(route.component),
                    })
                :   <BlankLayout />,
            meta: route.meta,
            children: route?.children ? flatMap(route.children) : [],
        }
    })
}

const handleRoutes = (routes: RouteType[]): RouteObject[] => {
    return flatMap(routes)
}

export { handleRoutes }
