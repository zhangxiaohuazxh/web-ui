import { createBrowserRouter, type RouteObject } from 'react-router-dom'

//  路由的path必须以/开头,暂时不处理相对路径
let routes: RouteObject[] = []

const router = createBrowserRouter([...routes], {
    basename: import.meta.env.VITE_BASE_PATH ?? '',
})

export default router
