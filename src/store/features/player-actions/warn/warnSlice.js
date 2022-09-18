import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_URL, WARN_PLAYER } from '../../../../config/api-config'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
}

export const warnPlayerRequest = createAsyncThunk(
  'player/warn',
  async ({ id, warnReason }, thunkAPI) => {
    try {
      const response = await axios.post(
        API_URL + WARN_PLAYER,
        {
          id,
          warnReason,
        },
        {
          withCredentials: 'true',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      console.log(`WARN ${id} with reason ${warnReason}`, response.status)
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

const warnPlayerSlice = createSlice({
  name: 'warn',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(warnPlayerRequest.pending, (state) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(warnPlayerRequest.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.steamID = action.payload
      })
      .addCase(warnPlayerRequest.rejected, (state, action) => {
        state.isError = true
        state.message = action.payload
        state.steamID = null
      })
  },
})

export const selectWarnPlayers = (state) => ({
  isError: state.warnPlayer.isError,
  isSuccess: state.warnPlayer.isSuccess,
  isLoading: state.warnPlayer.isLoading,
  steamID: state.warnPlayer.steamID,
})

export default warnPlayerSlice.reducer
