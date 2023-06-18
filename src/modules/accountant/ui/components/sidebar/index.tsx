import { memo } from 'react'
import { Col } from 'antd'
import './index.scss'

//FIXME:
const Sidebar = memo(() => {
  return (
    <Col span={6}>
      <div className="balance">Hello</div>
    </Col>
  )
})

export { Sidebar }
