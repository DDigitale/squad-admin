import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/auth/authSlice'
import verifyReducer from './slices/auth/verifySlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    verify: verifyReducer,
  },
})

export default store
