import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    // slices will go here later, e.g. counter: counterReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch