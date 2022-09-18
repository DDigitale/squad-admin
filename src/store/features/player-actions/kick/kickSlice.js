import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {API_URL, KICK_PLAYER} from "../../../../config/api-config";

const initialState = {
	isLoading: false,
	isSuccess: false,
	isError: false,
	message: '',
}

export const kickPlayerRequest = createAsyncThunk(
	'player/kick',
	async ({id, kickReason}, thunkAPI) => {
		try {
			const response = await axios.post(API_URL + KICK_PLAYER,
				{
					id,
					kickReason
				},
				{
					withCredentials: 'true',
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				}
			)
			console.log(`KICK ${id} with reason ${kickReason}`, response.status)
			return response.data
		} catch (error) {
			const message = (error.response && error.response.data && error.response.data.message)
				|| error.message || error.toString()
			return thunkAPI.rejectWithValue(message)
		}
	}
)

const kickPlayerSlice = createSlice({
	name: 'kick',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(kickPlayerRequest.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
			.addCase(kickPlayerRequest.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.steamID = action.payload;
			})
			.addCase(kickPlayerRequest.rejected, (state, action) => {
				state.isError = true;
				state.message = action.payload;
				state.steamID = null;
			})
	},
})

export const selectKickPlayers = (state) => ({
	isError: state.kickPlayer.isError,
	isSuccess: state.kickPlayer.isSuccess,
	isLoading: state.kickPlayer.isLoading,
	steamID: state.kickPlayer.steamID
})

export default kickPlayerSlice.reducer
