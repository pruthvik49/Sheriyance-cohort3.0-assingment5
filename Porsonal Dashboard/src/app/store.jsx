import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../../features/counter'
import authReducer from '../../features/auth'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
})