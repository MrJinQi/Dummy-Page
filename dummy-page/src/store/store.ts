import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './root-reducer'
import { useSelector, type TypedUseSelectorHook } from 'react-redux'

export const store = configureStore({
  reducer: rootReducer

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = () => store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;