import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const Test = () => {
  return (
    <div>
      <h1>HELLO TEST</h1>
    </div>
  )
}

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `Tab 1`,
    children: <Test />,
  },
  {
    key: '2',
    label: `Tab 2`,
    children: `Content of Tab Pane 2`,
  },
  {
    key: '3',
    label: `Tab 3`,
    children: `Content of Tab Pane 3`,
  },
];

const Tab: React.FC = () => {
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
  )
}

export default Tab;