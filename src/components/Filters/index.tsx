import {
  Col,
  Input,
  Row,
  Typography,
  Radio,
  Select,
  Tag,
  type SelectProps
} from 'antd'

function Filters() {
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
        <Input size="large" placeholder="Tìm kiếm..." />
      </Col>
      <Col span={24}>
        <Typography.Paragraph className="font-bold my-3">
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group
          name="radioGroup"
          defaultValue={1}
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
          size="large"
          mode="multiple"
          tagRender={tagRender}
          style={{ width: '100%' }}
          options={options}
        />
      </Col>
    </Row>
  )
}

export default Filters
