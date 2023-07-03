import React, { memo } from 'react'
import { Form } from 'antd'
import { Item } from './types'
import { MainTable } from './Table'

const originData: Item[] = []
for (let i = 0; i < 50; i++) {
  originData.push({
    key: i.toString(),
    name: `Edward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  })
}

const Income: React.FC = memo(() => {
  const [form] = Form.useForm()
 
  return (
    <Form form={form} component={false}>
      <MainTable form={form}/>
    </Form>
  )
})

export { Income }
