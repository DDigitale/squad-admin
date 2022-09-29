import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_URL, AUTH, VERIFY_STEAM } from 'config/api-config'
import { openidParams } from 'layout/PrivateRoute'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
}

export const verifySteam = createAsyncThunk(
  'auth/verify-steam',
  async (openidParams, thunkAPI) => {
    try {
      const response = await axios.post(
        API_URL + VERIFY_STEAM,
        {
          callbackURL: 'http://localhost:3000/',
          openIdInfo: openidParams,
        },
        {
          withCredentials: 'true',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      console.log('ВЕРИФИКАЦИЯ', response)
      localStorage.setItem('token', response.data)
      return response.status
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const verifyAuthSteam = createAsyncThunk(
  'auth/verify-steam',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(API_URL + AUTH, {
        withCredentials: 'true',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      console.log('ПРОВЕРКА АУТЕНТИФИКАЦИИ', response)
      return response.status
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

const verifySlice = createSlice({
  name: 'verify',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(verifySteam.pending, (state) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(verifySteam.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.token = action.payload
      })
      .addCase(verifySteam.rejected, (state, action) => {
        state.isError = true
        state.message = action.payload
        state.token = null
      })
  },
})

export const selectVerifyInfo = (state) => ({
  isError: state.verify.isError,
  isSuccess: state.verify.isSuccess,
  isLoading: state.verify.isLoading,
  steamLink: state.verify.steamLink,
})

export default verifySlice.reducer
