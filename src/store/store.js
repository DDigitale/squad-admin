import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/auth/authSlice'
import verifyReducer from './slices/auth/verifySlice'
import logoutReducer from './slices/auth/logoutSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    verify: verifyReducer,
    logout: logoutReducer,
  },
})

export default store
