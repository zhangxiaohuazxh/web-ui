import React, {type ReactElement} from 'react'
import {Layout} from 'antd'
import {RouterProvider} from 'react-router-dom'
import router from '@/router'
import '@/assets/styles/index.css'

const {Header, Content, Sider} = Layout

const layoutStyle: React.CSSProperties = {
    minHeight: '100vh',
};

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
};


export default function AppLayout(): ReactElement {

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
                        <RouterProvider router={router}></RouterProvider>
                    </Content>
                </Layout>
            </Layout>
        </>
    )

}
