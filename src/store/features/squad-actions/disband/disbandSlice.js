import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import {
  API_URL,
  DISBAND_SQUAD,
  KICK_PLAYER,
} from '../../../../config/api-config'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
}

export const disbandSquadRequest = createAsyncThunk(
  'squad/disband',
  async (teamId, squadId, thunkAPI) => {
    try {
      const response = await axios.post(
        API_URL + DISBAND_SQUAD,
        {
          teamId: teamId,
          squadId: teamId,
        },
        {
          withCredentials: 'true',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      console.log(`disband`, response)
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

const disbandSquadSlice = createSlice({
  name: 'disband-squad',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(disbandSquadRequest.pending, (state) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(disbandSquadRequest.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.steamID = action.payload
      })
      .addCase(disbandSquadRequest.rejected, (state, action) => {
        state.isError = true
        state.message = action.payload
        state.steamID = null
      })
  },
})

export const selectDisbandSquad = (state) => ({
  isError: state.disbandSquad.isError,
  isSuccess: state.disbandSquad.isSuccess,
  isLoading: state.disbandSquad.isLoading,
  steamID: state.disbandSquad.steamID,
})

export default disbandSquadSlice.reducer
