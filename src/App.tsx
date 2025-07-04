import { Divider, Typography } from 'antd'
import Filters from './components/Filters'
import TodoList from './components/TodoList'
import { setupServer } from './fakeApis'
import { useEffect } from 'react'
import { useAppDispatch } from './redux/hook'
import { fetchTodos } from './components/TodoList/todoListSlice'

if (import.meta.env.MODE === 'development') {
  setupServer()
}

function App() {
  const { Title } = Typography

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-[500px] h-[90vh] shadow-2xl rounded-lg flex flex-col ">
        <div className="p-5 overflow-y-auto">
          <Title className="text-center" level={1}>
            Todo App with Redux
          </Title>
          <Filters />
          <Divider />
          <TodoList />
        </div>
      </div>
    </div>
  )
}

export default App
