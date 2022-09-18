import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import {
  API_URL,
  REMOVE_PLAYER_FROM_SQUAD,
} from '../../../../config/api-config'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
}

export const removePlayerFromSquadRequest = createAsyncThunk(
  'player/removePlayerFromSquad',
  async (id, thunkAPI) => {
    try {
      const response = await axios.post(
        API_URL + REMOVE_PLAYER_FROM_SQUAD,
        {
          id,
        },
        {
          withCredentials: 'true',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      console.log(`REMOVE FROM SQUAD ${id}`, response.status)
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

const removePlayerFromSquadSlice = createSlice({
  name: 'remove-player-from-squad',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(removePlayerFromSquadRequest.pending, (state) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(removePlayerFromSquadRequest.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.steamID = action.payload
      })
      .addCase(removePlayerFromSquadRequest.rejected, (state, action) => {
        state.isError = true
        state.message = action.payload
        state.steamID = null
      })
  },
})

export const selectRemovePlayerFromSquad = (state) => ({
  isError: state.removePlayerFromSquad.isError,
  isSuccess: state.removePlayerFromSquad.isSuccess,
  isLoading: state.removePlayerFromSquad.isLoading,
  steamID: state.removePlayerFromSquad.steamID,
})

export default removePlayerFromSquadSlice.reducer
