import { Button, Col, Input, Row, Select, Space, Tag } from 'antd'
import Todo from '../Todo'

function TodoList() {
  return (
    <Row>
      <Col span={24}>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-3 h-[200px] overflow-y-auto">
            <Todo name="Task 1" priority="High" />
            <Todo name="Task 2" priority="Medium" />
            <Todo name="Task 3" priority="Low" />
            <Todo name="Task 1" priority="High" />
            <Todo name="Task 2" priority="Medium" />
            <Todo name="Task 3" priority="Low" />
            <Todo name="Task 1" priority="High" />
            <Todo name="Task 2" priority="Medium" />
            <Todo name="Task 3" priority="Low" />
          </div>
          <div>
            <Space.Compact className="w-full">
              <Input size="large" placeholder="Add a new task" />
              <Select
                size="large"
                defaultValue={'Medium'}
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
              ></Select>
              <Button size="large" type="primary">
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
