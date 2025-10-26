import {ConfigProvider, theme, type ThemeConfig} from 'antd'
import {useState} from 'react'
import 'reset-css/less/reset.less'
import zhCN from 'antd/locale/zh_CN';
import {cyan} from '@ant-design/colors';
import Layout from '@/shared/components/layout/AppLayout.tsx'


export default function App() {

    // @ts-ignore
    const changeThemeConfig = (config: ThemeConfig) => {
        const obj: ThemeConfig = {...configProvider, ...config}
        setConfigProvider(obj)
    }

    const [configProvider, setConfigProvider] = useState({
        token: {
            colorPrimary: cyan.primary,
            colorBgBlur: cyan.primary,
            borderRadius: 6
        },
        algorithm: theme.darkAlgorithm,
        inherit: true
    } as ThemeConfig)

    return (
        <>
            <ConfigProvider theme={configProvider} locale={zhCN}>
                <Layout/>
            </ConfigProvider>
        </>
    )

}