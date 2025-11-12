import { ConfigProvider, theme, type ThemeConfig } from 'antd'
import { useState } from 'react'
import { useLocation, BrowserRouter } from 'react-router-dom'
import 'reset-css/less/reset.less'
import zhCN from 'antd/locale/zh_CN'
import { cyan } from '@ant-design/colors'
import Layout from '@/shared/components/layout/AppLayout.tsx'
import Login from '@/features/system/auth/Login.tsx'
import { LOGIN_URL } from '@/shared/constant/systemConstant'

const AppContent = () => {
    const location = useLocation()
    // 判断是否为登录页面路由
    const isLoginPage = location.pathname === LOGIN_URL
    if (isLoginPage) {
        return <Login />
    }
    return <Layout />
}

export default function App() {
    // @ts-ignore
    const changeThemeConfig = (config: ThemeConfig) => {
        const obj: ThemeConfig = { ...configProvider, ...config }
        setConfigProvider(obj)
    }
    const [configProvider, setConfigProvider] = useState({
        token: {
            colorPrimary: cyan.primary,
            colorBgBlur: cyan.primary,
            borderRadius: 6,
        },
        algorithm: theme.defaultAlgorithm,
    } as ThemeConfig)

    return (
        <>
            <BrowserRouter>
                <ConfigProvider theme={configProvider} locale={zhCN}>
                    <AppContent />
                </ConfigProvider>
            </BrowserRouter>
        </>
    )
}
