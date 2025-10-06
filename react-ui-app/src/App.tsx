import {Button, ConfigProvider, theme, type ThemeConfig} from 'antd'
import {useState} from 'react'
import zhCN from 'antd/locale/zh_CN';
import {cyan} from '@ant-design/colors';
import {Camera} from '@icon-park/react';
import {get} from '@/utils/request'


export default function App() {

    // @ts-ignore
    const changeThemeConfig = (config: ThemeConfig) => {
        const obj: ThemeConfig = {...configProvider, ...config}
        setConfigProvider(obj)
    }

    const clickCallback = async () => {
        get('/api').then(res => {
            console.log('res', res)
        })
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
                <Button type={'primary'} onClick={clickCallback}>Click Me</Button>
                <Camera theme="filled" size="32" fill="blue"/>
            </ConfigProvider>
        </>
    )

}