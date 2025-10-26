import {createBrowserRouter, type RouteObject} from 'react-router-dom'
import {lazy} from "react";
import {Button, Result} from 'antd'

const Home = lazy(() => import('@/Home'))
const Login = lazy(() => import('@/features/system/auth/Login'))

const Error404 = () => (
    <Result
        status={'404'}
        title={'Page Not Found'}
        subTitle={'抱歉，您访问的页面不存在。'}
        extra={<Button type={'primary'} onClick={() => (window.location.href = '/')}>返回首页</Button>}
    />
)

const Test01 = lazy(() => import('@/features/system/test/Test01.tsx'))

//  路由的path必须以/开头,暂时不处理相对路径
const routes: RouteObject[] = [
    {
        path: '/',
        element: (<Home/>),
    },
    {
        path: '/test/01',
        element: (<Test01/>)
    },
    {
        path: '/sys/login',
        element: <Login/>
    },
    {
        path: '*',
        element: <Error404/>,
    }

]



const router = createBrowserRouter([
        ...routes
    ],
    {
        basename: import.meta.env.VITE_BASE_PATH ?? ''
    })


export default router