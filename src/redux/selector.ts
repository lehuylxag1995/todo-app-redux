import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from './store'
import type { priorityType } from '../components/Todo'

const searchFilterSelector = (state: RootState) => state.filterList.search
const statusFilterSelector = (state: RootState) => state.filterList.status
const prioprityFilterSelector = (state: RootState) => state.filterList.priority
const todoListSelector = (state: RootState) => state.todoList

export const todoRemainingSelector = createSelector(
  [
    todoListSelector,
    searchFilterSelector,
    statusFilterSelector,
    prioprityFilterSelector
  ],
  (todoList, searchText, searchStatus, searchPriority) => {
    return todoList.filter((todo) => {
      //Xét status trước
      if (searchStatus === 'All')
        return searchPriority.length
          ? todo.name.includes(searchText) &&
              searchPriority.includes(todo.priority)
          : todo.name.includes(searchText)

      return (
        todo.name.includes(searchText) &&
        (searchStatus === 'Completed' ? todo.completed : !todo.completed) &&
        (searchPriority.length ? searchPriority.includes(todo.priority) : true)
      )
    })
  }
)
