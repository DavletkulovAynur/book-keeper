import React, { memo, FC } from 'react'
import { Tabs } from 'antd'
import type { TabsProps } from 'antd'
import { Income } from '../income'

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

const Main: FC = memo(() => {
  const onChange = (key: string) => {
    console.log(key)
  }

  return (
    <>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  )
})

export { Main }
