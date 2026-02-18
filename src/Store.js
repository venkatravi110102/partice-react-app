import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './store/Counter'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})