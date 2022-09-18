import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	search: ''
}

const searchPlayerSlice = createSlice({
	name: 'searchPlayer',
	initialState,
	reducers: {
		setSearch: (state, action) => {
			state.search = action.payload;
			console.log(action.payload)
		},
		clearSearch: () => initialState
	}
})

export const {setSearch, clearSearch} = searchPlayerSlice.actions;
export const selectSearch = (state) => state.searchPlayer.search
export default searchPlayerSlice.reducer
