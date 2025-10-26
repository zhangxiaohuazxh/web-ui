import React, {type ReactElement, useEffect, useState, useRef} from 'react'
import {Layout} from 'antd'
import {BrowserRouter, type RouteObject} from 'react-router-dom'
import '@/assets/styles/index.css'
import DynamicRouter from "@/shared/components/layout/DynamicRouter.tsx";
import {get} from "@/utils/request";
import type {AxiosResponseData} from "#/request/axios.ts";
import {handleRoutes} from "@/router/routes.tsx";
import type {Route} from "#/request/routes.ts";
import {createWatermark} from '@/utils/safe/watermark'

const {Header, Content, Sider} = Layout

const layoutStyle: React.CSSProperties = {
    minHeight: '100vh',
}

const headerStyle: React.CSSProperties = {
    backgroundColor: '#4096ff',
    height: '8vh',
    width: '100%'
}

const contentStyle: React.CSSProperties = {
    height: '92vh',
}


const siderStyle: React.CSSProperties = {
    backgroundColor: '#0933d9',
    height: '92vh'
}


export default function AppLayout(): ReactElement {

    const containerRef = useRef(null)

    const [routes, setRoutes] = useState<RouteObject[]>([]);
    useEffect(() => {
        get('/static/routeConfiguration.json').then((res: AxiosResponseData<any>) => {
            if (res.isSuccess()) {
                const routes = handleRoutes(res.data?.routes as unknown as Route[])
                console.log('routes', routes)
                setRoutes(routes)
            }
        })
    }, [])
    console.log('水印', createWatermark('测试数据'))
    return (
        <>
            <Layout style={layoutStyle}>
                <Header style={headerStyle} className={'header-layout'}>
                    <div>Header</div>
                </Header>
                <Layout>
                    <Sider width={'8%'} style={siderStyle} className={'site-layout'}>
                        aside
                    </Sider>
                    <Content style={contentStyle} className={'content-layout'}>
                        <BrowserRouter>
                            <div ref={containerRef}>
                                <DynamicRouter routes={routes}/>
                            </div>
                        </BrowserRouter>
                    </Content>
                </Layout>
            </Layout>
        </>
    )

}
