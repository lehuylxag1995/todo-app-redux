import { Checkbox, Row, Tag } from 'antd'
import { useState } from 'react'
import { useAppDispatch } from '../../redux/hook'
import { todoListSlice } from '../TodoList/todoListSlice'

export type priorityType = 'High' | 'Medium' | 'Low'

const priorityColorMapping: Record<priorityType, string> = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray'
}

function Todo({
  name,
  priority,
  id,
  completed
}: {
  name: string
  priority: priorityType
  id: string
  completed: boolean
}) {
  const [checked, setChecked] = useState(completed)

  const dispatch = useAppDispatch()

  const toggleCheckbox = () => {
    setChecked(!checked)
  }

  const handleCheckboxChange = () => {
    dispatch(
      todoListSlice.actions.toggleComplete({
        id: id,
        completed: checked
      })
    )
  }

  return (
    <Row
      className={`flex items-center justify-between ${
        checked ? 'line-through opacity-50' : ''
      }`}
    >
      <Checkbox
        checked={checked}
        onChange={toggleCheckbox}
        onClick={handleCheckboxChange}
      >
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[priority]}>{priority}</Tag>
    </Row>
  )
}

export default Todo
