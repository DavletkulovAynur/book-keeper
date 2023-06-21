import React, { useState, memo, FC } from 'react'
import { Layout, Menu } from 'antd'
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'

const { Sider } = Layout

const Sidebar: FC = memo(() => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <UserOutlined />,
            label: 'Расходы и доходы',
          },
          {
            key: '2',
            icon: <VideoCameraOutlined />,
            label: 'Накопления и долги',
          },
          {
            key: '3',
            icon: <VideoCameraOutlined />,
            label: 'Документы',
          },
        ]}
      />
    </Sider>
  )
})

export { Sidebar }
