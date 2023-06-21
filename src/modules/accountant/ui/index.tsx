import React, { memo } from 'react'

import { Layout, theme } from 'antd'
import { Tabs } from 'antd'
import type { TabsProps } from 'antd'
import { Income } from './components/income'

const { Content } = Layout

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `Расходы`,
    children: 'costs',
  },
  {
    key: '2',
    label: `Доходы`,
    children: <Income />,
  },
]

const Accountant: React.FC = memo(() => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const onChange = (key: string) => {
    console.log(key)
  }

  return (
    <Content
      style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
        background: colorBgContainer,
      }}
    >
      <>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </>
    </Content>
  )
})

export { Accountant }
