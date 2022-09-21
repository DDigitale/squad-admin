import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { STEAM_INFO } from 'config/api-config'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
}

export const steamInfoRequest = createAsyncThunk(
  'player/steamInfo',
  async (steam64id, thunkAPI) => {
    try {
      const response = await axios.get(STEAM_INFO + 76561198162194048, {
        withCredentials: 'true',
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:3000',
          'Content-Type': 'application/json',
        },
      })
      console.info(`STEAM_INFO ${steam64id}`, response.status)
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

const steamInfoSlice = createSlice({
  name: 'steamInfo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(steamInfoRequest.pending, (state) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(steamInfoRequest.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.steamID = action.payload
      })
      .addCase(steamInfoRequest.rejected, (state, action) => {
        state.isError = true
        state.message = action.payload
        state.steamID = null
      })
  },
})

export const selectSteamInfo = (state) => ({
  isError: state.steamInfo.isError,
  isSuccess: state.steamInfo.isSuccess,
  isLoading: state.steamInfo.isLoading,
  steamID: state.steamInfo.steamID,
})

export default steamInfoSlice.reducer
