import React, { memo } from 'react'
import { Form } from 'antd'
import { MainTable } from './Table'
import { EditModal } from './EditModal'

const Income: React.FC = memo(() => {
  const [form] = Form.useForm()

  //TODO: modal
  
 
  return (
    <Form form={form} component={false}>
      <MainTable form={form}/>
      <EditModal />
    </Form>
  )
})

export { Income }
