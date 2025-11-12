import React, { type ReactElement, useEffect, useRef, useState } from 'react'
import { Layout } from 'antd'
import { type RouteObject } from 'react-router-dom'
import '@/assets/styles/index.css'
import 'antd/dist/reset.css'
import DynamicRouter from '@/shared/components/layout/DynamicRouter.tsx'
import { get } from '@/utils/request'
import type { AxiosResponseData } from '#/request/axios.ts'
import { handleRoutes } from '@/router/routes.tsx'
import type { Route } from '#/request/routes.ts'
import NProgress from 'nprogress'

const { Header, Content, Sider } = Layout

const layoutStyle: React.CSSProperties = {
    minHeight: '100vh',
}

const headerStyle: React.CSSProperties = {
    height: '8vh',
    width: '100%',
    backgroundColor: '#ffffff',
}

const contentStyle: React.CSSProperties = {
    height: '92vh',
    backgroundColor: '#ffffff',
}

const siderStyle: React.CSSProperties = {
    height: '92vh',
    backgroundColor: '#ffffff',
}

export default function AppLayout(): ReactElement {
    const containerRef = useRef(null)
    const [routes, setRoutes] = useState<RouteObject[]>([])
    useEffect(() => {
        NProgress.start()
        get('/static/routeConfiguration.json')
            .then((res: AxiosResponseData<any>) => {
                if (res.isSuccess()) {
                    const routes = handleRoutes(
                        res.data?.routes as unknown as Route[],
                    )
                    console.log('routes', routes)
                    setRoutes(routes)
                    NProgress.done()
                }
            })
            .catch(err => {
                console.log('获取路由失败', err)
            })
    }, [])
    return (
        <>
            <Layout style={layoutStyle} className={'main-layout'}>
                <Header style={headerStyle} className={'layout-header'}>
                    <div>Header</div>
                </Header>
                <Layout className={'layout-outer-content'}>
                    <Sider
                        width={'8%'}
                        style={siderStyle}
                        className={'layout-aside'}
                    >
                        aside
                    </Sider>
                    <Content
                        style={contentStyle}
                        className={'layout-inner-content'}
                    >
                        <div ref={containerRef}>
                            <DynamicRouter routes={routes} />
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}
