import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/auth/authSlice'
import verifyReducer from './slices/auth/verifySlice'
import getOnlineReducer from 'store/slices/get-players/getOnlineSlice'
import getPlayersListReducer from 'store/slices/get-players/getPlayersListSlice'
import getPlayerMessagesReducer from 'store/slices/get-players/getPlayerMessages'
import banPlayerReducer from './slices/player-actions/banSlice'
import kickPlayerReducer from './slices/player-actions/kickSlice'
import warnPlayerReducer from './slices/player-actions/warnSlice'
import teamChangePlayerReducer from './slices/player-actions/teamChangeSlice'
import removePlayerFromSquadReducer from './slices/player-actions/removePlayerFromSquadSlice'
import disbandSquadReducer from './slices/squad-actions/disbandSlice'
import steamInfoReducer from './slices/player-actions/steamInfoSlice'
import modalReducer from './slices/modal/modalSlice'
import searchPlayerReducer from './slices/player-actions/searchPlayerSlice'
import logoutReducer from './slices/auth/logoutSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    verify: verifyReducer,
    players: getOnlineReducer,
    playersList: getPlayersListReducer,
    playerMessages: getPlayerMessagesReducer,
    banPlayer: banPlayerReducer,
    kickPlayer: kickPlayerReducer,
    warnPlayer: warnPlayerReducer,
    teamChangePlayer: teamChangePlayerReducer,
    removePlayerFromSquad: removePlayerFromSquadReducer,
    disbandSquad: disbandSquadReducer,
    steamInfo: steamInfoReducer,
    modalState: modalReducer,
    searchPlayer: searchPlayerReducer,
    logout: logoutReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(playersInfoApi.middleware)
})

export default store
