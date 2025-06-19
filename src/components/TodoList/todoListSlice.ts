import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
import type { priorityType } from '../Todo'

interface TodoType {
  id: string
  completed: boolean
  name: string
  priority: priorityType
}

type TodoListType = TodoType[]

const initialState: TodoListType = [
  { id: uuidv4(), completed: false, name: 'Learn Redux', priority: 'Low' },
  { id: uuidv4(), completed: true, name: 'Learn React', priority: 'Medium' },
  { id: uuidv4(), completed: false, name: 'Learn Nextjs', priority: 'High' }
]

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoType>) => {
      state.push(action.payload)
    },
    toggleComplete: (
      state,
      action: PayloadAction<{ id: string; completed: boolean }>
    ) => {
      //lọc lấy id
      const todoById = state.find((todo) => todo.id === action.payload.id)
      if (todoById) todoById.completed = !action.payload.completed
    }
  }
})

export const { addTodo, toggleComplete } = todoListSlice.actions

export default todoListSlice.reducer
