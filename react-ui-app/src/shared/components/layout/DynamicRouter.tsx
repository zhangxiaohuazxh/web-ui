import {lazy} from "react";
import {type RouteObject, useRoutes} from 'react-router-dom'

const Home = lazy(() => import('@/Home'))
const NotFound = lazy(() => import('@/shared/components/status/NotFound'))


export default function DynamicRouter({routes}: { routes: RouteObject[] }) {
    const routerConfig: RouteObject[] = [
        ...routes,
        {
            "path": "/",
            "element": <Home/>
        }, {
            path: '*',
            element: <NotFound/>
        }
    ]
    return useRoutes(routerConfig)
}