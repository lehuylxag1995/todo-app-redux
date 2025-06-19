import {
  Col,
  Input,
  Row,
  Typography,
  Radio,
  Select,
  Tag,
  type SelectProps,
  type RadioChangeEvent
} from 'antd'
import React, { useState } from 'react'
import type { priorityType } from '../Todo'
import { useAppDispatch } from '../../redux/hook'
import { filterSlice } from './filterSlice'

function Filters() {
  const [search, setSearch] = useState<string>('')
  const [status, setStatus] = useState<string>('All')
  const [priority, setPriority] = useState<priorityType[]>([])

  const dispatch = useAppDispatch()

  const handleRadioChange = (e: RadioChangeEvent) => {
    setStatus(e.target.value)
    dispatch(filterSlice.actions.statusFilterChange(e.target.value))
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    dispatch(filterSlice.actions.searchFilterChange(e.target.value))
  }

  const handlePriorityChange = (value: priorityType[]) => {
    setPriority(value)
    dispatch(filterSlice.actions.priorityFilterChange(value))
  }

  type TagRender = SelectProps['tagRender']

  const options: SelectProps['options'] = [
    { value: 'Low', label: 'Low' },
    { value: 'Medium', label: 'Medium' },
    { value: 'High', label: 'High' }
  ]

  const tagRender: TagRender = (props) => {
    const { label, value, closable, onClose } = props
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
      event.preventDefault()
      event.stopPropagation()
    }
    return (
      <Tag
        color={value === 'Low' ? 'gray' : value === 'Medium' ? 'orange' : 'red'}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{
          marginInlineEnd: 4,
          fontSize: '16px',
          cursor: 'pointer',
          display: 'inline-block',
          padding: '4px 6px', // padding giúp tag cao hơn, không cần height
          minHeight: '32px', // chỉ định tối thiểu nếu muốn đẹp đều
          alignItems: 'center', // căn giữa nội dung theo chiều dọc
          flexWrap: 'wrap' // cho phép nội dung xuống dòng nếu cần
        }}
      >
        {label}
      </Tag>
    )
  }

  return (
    <Row>
      <Col span={24}>
        <Typography.Paragraph className="font-bold my-3">
          Search
        </Typography.Paragraph>
        <Input
          size="large"
          placeholder="Tìm kiếm..."
          value={search}
          onChange={handleSearchChange}
        />
      </Col>
      <Col span={24}>
        <Typography.Paragraph className="font-bold my-3">
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group
          name="radioGroup"
          value={status}
          onChange={handleRadioChange}
          options={[
            { label: 'All', value: 'All' },
            { label: 'Completed', value: 'Completed' },
            { label: 'To do', value: 'To do' }
          ]}
        />
      </Col>
      <Col span={24}>
        <Typography.Paragraph className="font-bold my-3">
          Filter By Priority
        </Typography.Paragraph>
        <Select
          defaultValue={priority}
          onChange={handlePriorityChange}
          size="large"
          mode="multiple"
          allowClear
          placeholder="Chọn độ ưu tiên"
          tagRender={tagRender}
          style={{ width: '100%' }}
          options={options}
        />
      </Col>
    </Row>
  )
}

export default Filters
