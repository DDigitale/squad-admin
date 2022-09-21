import jsonBigInt from "json-bigint";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {API_URL, GET_PLAYERS} from "config/api-config";

const initialState = {
	isLoading: false,
	isSuccess: false,
	isError: false,
	message: '',
	playersList: undefined,
}

const JSONbig = jsonBigInt({storeAsString: true});

export const getPlayersListResponse = createAsyncThunk(
	'players/get-players-list',
	async (_, thunkAPI) => {
		try {
			const response = await axios.post(API_URL + GET_PLAYERS,
				{page: 1, size: 100},
				{
				withCredentials: 'true',
				headers: {
					'Content-Type': 'multipart/form-data',
				},
				transformResponse: [(data) => {
					return JSONbig.parse(data)
				}]
			})
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

const getPlayersListSlice = createSlice({
	name: 'players-list',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getPlayersListResponse.pending, (state) => {
				state.isLoading = true
				state.isError = false
			})
			.addCase(getPlayersListResponse.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.playersList = action.payload
			})
			.addCase(getPlayersListResponse.rejected, (state, action) => {
				state.isError = true
				state.message = action.payload
				state.playersList = null
			})
	},
})

export const selectPlayersList = (state) => state.players.playersList
export const selectPlayersListInfo = (state) => ({
	isError: state.players.isError,
	isSuccess: state.players.isSuccess,
	isLoading: state.players.isLoading,
})

export default getPlayersListSlice.reducer
