import React, { memo } from 'react'

import { Layout, theme } from 'antd'
import { Col, Row } from 'antd'
import { Sidebar } from './components/sidebar'
import { Main } from './components/main'

const { Content } = Layout

const Accountant: React.FC = memo(() => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  //FIXME: что я хочу сделать какую задачу придумать
  return (
    <Content
      style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
        background: colorBgContainer,
      }}
    >
      <Row>
        <Col span={24}>
          <Main />
        </Col>
        {/* <Sidebar /> */}
      </Row>
    </Content>
  )
})

export { Accountant }
