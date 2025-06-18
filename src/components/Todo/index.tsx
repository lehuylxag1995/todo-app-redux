import { Checkbox, Row, Tag } from 'antd'
import { useState } from 'react'

type priorityType = 'High' | 'Medium' | 'Low'

const priorityColorMapping: Record<priorityType, string> = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray'
}

function Todo({ name, priority }: { name: string; priority: priorityType }) {
  const [checked, setChecked] = useState(false)

  const toggleCheckbox = () => {
    setChecked(!checked)
  }

  return (
    <Row
      className={`flex items-center justify-between ${
        checked ? 'line-through opacity-50' : ''
      }`}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[priority]}>{priority}</Tag>
    </Row>
  )
}

export default Todo
