import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { priorityType } from '../Todo'

interface TodoType {
  id: string
  completed: boolean
  name: string
  priority: priorityType
}

type TodoListType = {
  state: 'idle' | 'loading'
  todos: TodoType[]
}

const initialState: TodoListType = {
  state: 'idle',
  todos: []
}

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    // addTodo: (state, action: PayloadAction<TodoType>) => {
    //   state.push(action.payload)
    // },
    // toggleComplete: (
    //   state,
    //   action: PayloadAction<{ id: string; completed: boolean }>
    // ) => {
    //   //lọc lấy id
    //   const todoById = state.find((todo) => todo.id === action.payload.id)
    //   if (todoById) todoById.completed = !action.payload.completed
    // }
  },
  extraReducers: (builder) => {
    builder
      //Demo cách sử dụng createAsyncThunk là pending, fulfilled, rejected
      .addCase(fetchTodos.pending, (state) => {
        state.state = 'loading'
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        console.log({ action })
        state.state = 'idle'
        state.todos = action.payload
      })
      .addCase(addTodoThunk.fulfilled, (state, action) => {
        state.state = 'idle'
        state.todos.push(action.payload)
      })
      .addCase(toggleCompletedThunk.fulfilled, (state, action) => {
        state.state = 'idle'
        let todoById = state.todos.find((todo) => todo.id === action.payload)
        if (todoById) todoById.completed = !todoById.completed
      })
  }
})

export const fetchTodos = createAsyncThunk('todo/fetchTodos', async () => {
  const response = await fetch('/api/todos')
  const data = await response.json()
  console.log({ data })
  return data.todos
})

export const addTodoThunk = createAsyncThunk(
  'todo/addTodo',
  async (todo: TodoType) => {
    const response = await fetch('/api/todos/', {
      method: 'POST',
      body: JSON.stringify(todo)
    })
    const data = await response.json()
    return data.todos
  }
)

export const toggleCompletedThunk = createAsyncThunk(
  'todo/toggleCompleted',
  async (payload: { id: string }) => {
    const response = await fetch(`/api/todos`, {
      method: 'PUT',
      body: JSON.stringify(payload.id)
    })
    const data = await response.json()
    return data.todos
  }
)
// export const { addTodo, toggleComplete } = todoListSlice.actions

export default todoListSlice.reducer
