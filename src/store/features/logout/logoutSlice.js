import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, LOGOUT} from "../../../config/api-config";
import axios from "axios";

const initialState = {
	isLoading: false,
	isSuccess: false,
	isError: false,
	message: '',
}

export const logoutResponse = createAsyncThunk(
	'logout',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get(API_URL + LOGOUT,
				{
					withCredentials: 'true',
					headers: {
						'Access-Control-Allow-Origin':'http://localhost:3000',
					}
				}
			)
			console.log('ВЫХОД',response)
			localStorage.clear()
			return response.data
		} catch (error) {
			const message = (error.response && error.response.data && error.response.data.message)
				|| error.message || error.toString()
			return thunkAPI.rejectWithValue(message)
		}
	}
)

const logoutSlice = createSlice({
	name: 'logout',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(logoutResponse.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
			.addCase(logoutResponse.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
			})
			.addCase(logoutResponse.rejected, (state, action) => {
				state.isError = true;
				state.message = action.payload;
			})
	},
})



export const selectLogout = (state) => state.logout
export const selectLogoutInfo = (state) => ({
	isError: state.logout.isError,
	isSuccess: state.logout.isSuccess,
	isLoading: state.logout.isLoading,
})


export default logoutSlice.reducer
