import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_URL, PLAYER_TEAM_CHANGE } from '../../../../config/api-config'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
}

export const teamChangePlayerRequest = createAsyncThunk(
  'player/teamChangePlayer',
  async (id, thunkAPI) => {
    try {
      const response = await axios.post(
        API_URL + PLAYER_TEAM_CHANGE,
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
      console.log(`TEAM CHANGE ${id}`, response.status)
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

const teamChangePlayerSlice = createSlice({
  name: 'team-change',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(teamChangePlayerRequest.pending, (state) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(teamChangePlayerRequest.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.steamID = action.payload
      })
      .addCase(teamChangePlayerRequest.rejected, (state, action) => {
        state.isError = true
        state.message = action.payload
        state.steamID = null
      })
  },
})

export const selectTeamChangePlayers = (state) => ({
  isError: state.teamChangePlayer.isError,
  isSuccess: state.teamChangePlayer.isSuccess,
  isLoading: state.teamChangePlayer.isLoading,
  steamID: state.teamChangePlayer.steamID,
})

export default teamChangePlayerSlice.reducer
