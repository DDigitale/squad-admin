import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	showPlayerItemModal: false,
}

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		showModal: (state, action) => {
			state.showPlayerItemModal = true;
			state.playerData = action.payload.player
			console.log(action.payload.player)
		},
		hideModal: (state) => {
			state.showPlayerItemModal = false;
		}

	},
})

export const selectPlayersModalInfo = (state) => state.modalState.playerData
export const {showModal, hideModal} = modalSlice.actions;
export default modalSlice.reducer
