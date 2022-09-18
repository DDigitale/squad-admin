import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {API_URL, BAN_PLAYER} from "../../../../config/api-config";

const initialState = {
	isLoading: false,
	isSuccess: false,
	isError: false,
	message: '',
}

export const banPlayerRequest = createAsyncThunk(
	'player/ban',
	async ({id, banReason, banLength}, thunkAPI) => {
		try {
			const response = await axios.post(API_URL + BAN_PLAYER,
				{
					id,
					banLength, // unix time + 1d, 3d, 7d...
					banReason
				},
				{
					withCredentials: 'true',
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				}
			)
			console.info(`BAN ${id} with reason ${banReason} and length ${banLength}`, response.status)
			return response.data
		} catch (error) {
			const message = (error.response && error.response.data && error.response.data.message)
				|| error.message || error.toString()
			return thunkAPI.rejectWithValue(message)
		}
	}
)

const banPlayerSlice = createSlice({
	name: 'ban',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(banPlayerRequest.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
			.addCase(banPlayerRequest.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.steamID = action.payload;
			})
			.addCase(banPlayerRequest.rejected, (state, action) => {
				state.isError = true;
				state.message = action.payload;
				state.steamID = null;
			})
	},
})

export const selectBanPlayers = (state) => ({
	isError: state.banPlayer.isError,
	isSuccess: state.banPlayer.isSuccess,
	isLoading: state.banPlayer.isLoading,
	steamID: state.banPlayer.steamID
})

export default banPlayerSlice.reducer
