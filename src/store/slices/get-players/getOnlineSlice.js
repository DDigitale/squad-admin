import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_URL, GET_ONLINE } from 'config/api-config'
import axios from 'axios'
import { extendData } from 'utils/extendPlayers'
import { JSONbig } from 'api/users'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
  players: undefined,
}

export const getOnlineResponse = createAsyncThunk(
  'players/get-online',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(API_URL + GET_ONLINE, {
        withCredentials: 'true',
        headers: {
          'Content-Type': 'application/json',
        },
        transformResponse: [
          (data) => {
            return JSONbig.parse(data)
          },
        ],
      })
      extendData(response.data)
      return response.data
    } catch (error) {
      console.log(error)
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

const getOnlineSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOnlineResponse.pending, (state) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(getOnlineResponse.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.players = action.payload
      })
      .addCase(getOnlineResponse.rejected, (state, action) => {
        state.isError = true
        state.message = action.payload
        state.players = null
      })
  },
})

export const selectPlayers = (state) => state.players.players
export const selectPlayersInfo = (state) => ({
  isError: state.players.isError,
  isSuccess: state.players.isSuccess,
  isLoading: state.players.isLoading,
})

export default getOnlineSlice.reducer
