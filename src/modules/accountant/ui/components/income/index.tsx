import React, { memo } from 'react'
import { Form } from 'antd'
import { MainTable } from './Table'

const Income: React.FC = memo(() => {
  const [form] = Form.useForm()
 
  return (
    <Form form={form} component={false}>
      <MainTable form={form}/>
    </Form>
  )
})

export { Income }
