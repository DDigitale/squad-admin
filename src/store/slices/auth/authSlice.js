import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  API_URL,
  CALLBACK_URL,
  GET_STEAM_LINK,
} from '../../../config/api-config'
import axios from 'axios'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
  steamLink: null,
}

export const getSteamLink = createAsyncThunk(
  'auth/get-steam-link',
  async (callbackURL, thunkAPI) => {
    try {
      const response = await axios.post(
        API_URL + GET_STEAM_LINK,
        { callbackURL: CALLBACK_URL },
        {
          withCredentials: 'true',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      console.log('ЗАПРОС ССЫЛКИ', response)
      // localStorage.setItem('token', response.request.response)
      return response.data
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

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSteamLink.pending, (state) => {
        state.isLoading = true
        state.isError = false
        state.steamLink = null
      })
      .addCase(getSteamLink.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.steamLink = action.payload
      })
      .addCase(getSteamLink.rejected, (state, action) => {
        state.isError = true
        state.message = action.payload
        state.steamLink = null
      })
  },
})

// export const selectAuth = (state) => state.auth.steamLink
// export const selectAuthInfo = (state) => ({
// 	isError: state.auth.isError,
// 	isSuccess: state.auth.isSuccess,
// 	isLoading: state.auth.isLoading,
// 	steamLink: state.auth.steamLink,
// })

export default authSlice.reducer
