import jsonBigInt from 'json-bigint'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_URL, GET_PLAYER_MESSAGES } from 'config/api-config'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
  playerMessages: undefined,
}

const JSONbig = jsonBigInt({ storeAsString: true })

export const getPlayerMessagesResponse = createAsyncThunk(
  'players/get-player-messages',
  async (playerSteamId, thunkAPI) => {
    try {
      const response = await axios.post(
        API_URL + GET_PLAYER_MESSAGES,
        { playerSteamId },
        {
          withCredentials: 'true',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          transformResponse: [
            (data) => {
              return JSONbig.parse(data)
            },
          ],
        }
      )
      console.log(response.data)
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

const getPlayerMessageSlice = createSlice({
  name: 'player-kicks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPlayerMessagesResponse.pending, (state) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(getPlayerMessagesResponse.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.playerMessages = action.payload
      })
      .addCase(getPlayerMessagesResponse.rejected, (state, action) => {
        state.isError = true
        state.message = action.payload
        state.playerMessages = null
      })
  },
})

export const selectPlayerMessagesList = (state) => state.players.playerMessages

export const selectPlayerMessagesListInfo = (state) => ({
  isError: state.players.isError,
  isSuccess: state.players.isSuccess,
  isLoading: state.players.isLoading,
})

export default getPlayerMessageSlice.reducer
