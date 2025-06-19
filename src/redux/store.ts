import { configureStore } from '@reduxjs/toolkit'
import todoListSlice from '../components/TodoList/todoListSlice'
import filterSlice from '../components/Filters/filterSlice'

export const store = configureStore({
  reducer: {
    todoList: todoListSlice,
    filterList: filterSlice
  }
})

//Lấy toàn bộ state của store (dùng với useSelector để gợi ý)
export type RootState = ReturnType<typeof store.getState>

//Lấy kiểu của hàm dispatch (dùng với useDispatch để gợi ý)
export type AppDispatch = typeof store.dispatch
