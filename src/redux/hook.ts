import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'

// Viết tắt, để nữa sử dụng bên view component
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
