import React from "react";
import {Button, Result} from 'antd'


export default function NotFound(): React.ReactElement {
    return (
        <Result
            status={'404'}
            title={'Page Not Found'}
            subTitle={'抱歉，您访问的页面不存在。'}
            extra={<Button type={'primary'} onClick={() => (window.location.href = '/')}>返回首页</Button>}
        />
    )
}