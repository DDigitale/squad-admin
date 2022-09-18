import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, GET_ONLINE} from "../../../config/api-config";
import axios from "axios";
import {extendData} from "./extendPlayers";

const initialState = {
	isLoading: false,
	isSuccess: false,
	isError: false,
	message: '',
	playersList: undefined
}

export const getPlayers = createAsyncThunk(
	'players/get-online',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get(API_URL + GET_ONLINE,
				{
					// withCredentials: 'true',
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)
			extendData(response.data)
			console.log(response.data)
			return response.data
		} catch (error) {
			console.log(error)
			const message = (error.response && error.response.data && error.response.data.message)
				|| error.message || error.toString()
			return thunkAPI.rejectWithValue(message)
		}
	}
)

const getPlayersSlice = createSlice({
	name: 'players',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getPlayers.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
			.addCase(getPlayers.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.playersList = action.payload;
			})
			.addCase(getPlayers.rejected, (state, action) => {
				state.isError = true;
				state.message = action.payload;
				state.playersList = null;
			})
	},
})


export const selectPlayers = (state) => state.players.playersList
export const selectPlayersInfo = (state) => ({
	isError: state.players.isError,
	isSuccess: state.players.isSuccess,
	isLoading: state.players.isLoading,
})


export default getPlayersSlice.reducer
