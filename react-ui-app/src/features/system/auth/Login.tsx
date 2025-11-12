import React, { type ReactElement } from 'react'
import { Form, Input, Button, Row, Col } from 'antd'
import type { Rule } from 'antd/es/form'
import { type NamePath } from 'antd/es/form/interface'
import { QRCodeCanvas } from 'qrcode.react'

const checkUserId = (_: Rule, value: string) => {
    return new Promise((resolve, reject) => {
        if (!value || value.trim() === '') {
            reject('请输入账户id')
        } else if (value?.length < 8) {
            reject('账户id长度不能小于8位')
        }
        resolve(value)
    })
}

const checkPasswd = (_: Rule, value: string) => {
    return new Promise((resolve, reject) => {
        if (!value || value.trim() === '') {
            reject('请输入密码')
        } else if (value?.length < 8) {
            reject('密码长度不能小于8位')
        }
        resolve(value)
    })
}

const loginLayoutStyle: React.CSSProperties = {
    paddingTop: '10%',
    paddingLeft: '40%',
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    gap: '40px',
    overflow: 'hidden',
}

const loginQrcodeContainerStyle: React.CSSProperties = {
    overflow: 'hidden',
    padding: '20px',
    textAlign: 'center',
}

const loginQrcodeTitleStyle: React.CSSProperties = {
    overflow: 'hidden',
    fontSize: '16px',
    marginBottom: '20px',
    fontWeight: 'bold',
}

// 添加表单样式
const loginFormStyle: React.CSSProperties = {
    flex: 1,
    minWidth: '300px',
    padding: '20px',
}

export default function Login(): ReactElement {
    const [form] = Form.useForm()
    const doLogin = () => {
        form.validateFields()
            .then((nameList?: NamePath[]) => {
                // todo login
                console.log('values', nameList)
            })
            .catch(error => {
                console.log('校验不通过', error)
            })
    }
    const resetForm = () => {
        form.resetFields()
    }
    return (
        <>
            <div className={'login-container'} style={loginLayoutStyle}>
                <div
                    className={'login-qrcode-container'}
                    style={loginQrcodeContainerStyle}
                >
                    <div
                        className={'login-qrcode-title'}
                        style={loginQrcodeTitleStyle}
                    >
                        请使用微信扫描二维码登录
                    </div>
                    <QRCodeCanvas
                        className={'login-qrcode'}
                        size={228}
                        value={'https://www.baidu.com'}
                    />
                </div>
                <Form
                    form={form}
                    layout={'vertical'}
                    size={'large'}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    autoComplete="off"
                    style={loginFormStyle}
                    className={'loginForm'}
                    scrollToFirstError
                >
                    <Form.Item
                        label="用户名"
                        name="userId"
                        rules={[{ required: true, validator: checkUserId }]}
                    >
                        <Input
                            allowClear
                            maxLength={32}
                            placeholder="请输入账户id"
                        />
                    </Form.Item>
                    <Form.Item
                        label="密码"
                        name="passwd"
                        rules={[{ required: true, validator: checkPasswd }]}
                    >
                        <Input.Password
                            allowClear
                            maxLength={32}
                            placeholder="请输入账户密码"
                        />
                    </Form.Item>
                    <Row gutter={24}>
                        <Col span={9}>
                            <Form.Item>
                                <Button
                                    type={'primary'}
                                    onClick={doLogin}
                                    block
                                >
                                    登录
                                </Button>
                            </Form.Item>
                        </Col>
                        <Col span={9} offset={1}>
                            <Form.Item>
                                <Button
                                    type={'primary'}
                                    onClick={resetForm}
                                    block
                                >
                                    重置
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    )
}
