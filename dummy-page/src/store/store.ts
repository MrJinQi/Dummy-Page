import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './root-reducer'

export const store = configureStore({
  reducer: rootReducer

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = () => store.dispatch

export const useAppSelector: <TSelected>(selector: (state: RootState) => TSelected) => TSelected = (selector) => {
  return selector(store.getState())
}