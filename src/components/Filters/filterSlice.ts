import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { priorityType } from '../Todo'

interface FilterType {
  search: string
  status: string
  priority: priorityType[]
}

const initialState: FilterType = {
  search: '',
  status: 'All',
  priority: []
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    searchFilterChange: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    statusFilterChange: (state, action: PayloadAction<string>) => {
      state.status = action.payload
    },
    priorityFilterChange: (state, action: PayloadAction<priorityType[]>) => {
      state.priority = action.payload
    }
  }
})

export const { searchFilterChange, statusFilterChange, priorityFilterChange } =
  filterSlice.actions

export default filterSlice.reducer
