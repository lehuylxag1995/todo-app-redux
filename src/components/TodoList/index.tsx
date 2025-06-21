import { Button, Col, Input, Row, Select, Space, Tag } from 'antd'
import Todo, { type priorityType } from '../Todo'

import { v4 as uuidv4 } from 'uuid'
import { addTodoThunk, fetchTodos, todoListSlice } from './todoListSlice'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { todoRemainingSelector } from '../../redux/selector'

function TodoList() {
  const [name, setName] = useState<string>('')
  const [priority, setPrority] = useState<priorityType>('Medium')

  //Truy cập vào store để lấy data
  const todoList = useAppSelector(todoRemainingSelector)

  //Hàm xây dựng sẵn của redux để đẩy sự kiện vào reducer
  const dispatch = useAppDispatch()

  //Lấy data từ input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  //Lấy data từ select
  const handleSelectChange = (value: priorityType) => {
    setPrority(value)
  }

  //Xử lý nút thêm
  const handleAddButtonClick = () => {
    //Phát sự kiện thêm mới đến reducer
    // dispatch(
    //   todoListSlice.actions.addTodo({
    //     id: uuidv4(),
    //     name: name,
    //     priority: priority,
    //     completed: false
    //   })
    // )

    //Sử dụng thunk làm middleware để thực hiện thêm mới
    dispatch(
      addTodoThunk({
        id: uuidv4(),
        name: name,
        priority: priority,
        completed: false
      })
    )

    //Sau khi thêm mới thì mặc định giá trị
    setName('')
    setPrority('Medium')
  }

  return (
    <Row>
      <Col span={24}>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-3 h-[200px] overflow-y-auto">
            {todoList.map((todo) => (
              <Todo
                name={todo.name}
                priority={todo.priority}
                id={todo.id}
                completed={todo.completed}
                key={todo.id}
              ></Todo>
            ))}
          </div>
          <div>
            <Space.Compact className="w-full">
              <Input
                size="large"
                placeholder="Add a new task"
                value={name}
                onChange={handleInputChange}
              />
              <Select
                size="large"
                defaultValue={priority}
                onChange={handleSelectChange}
                options={[
                  {
                    label: <Tag color="red">High</Tag>,
                    value: 'High'
                  },
                  {
                    label: <Tag color="blue">Medium</Tag>,
                    value: 'Medium'
                  },
                  {
                    label: <Tag color="grey">Low</Tag>,
                    value: 'Low'
                  }
                ]}
              />
              <Button
                size="large"
                type="primary"
                onClick={handleAddButtonClick}
              >
                Thêm Todo
              </Button>
            </Space.Compact>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default TodoList
