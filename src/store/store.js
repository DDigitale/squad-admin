import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth/authSlice'
import verifyReducer from './features/auth/verifySlice'
import getPlayersReducer from './features/get-players/getPlayersSlice'
import banPlayerReducer from './features/player-actions/ban/banSlice'
import kickPlayerReducer from './features/player-actions/kick/kickSlice'
import warnPlayerReducer from './features/player-actions/warn/warnSlice'
import teamChangePlayerReducer from './features/player-actions/team-change/teamChangeSlice'
import removePlayerFromSquadReducer from './features/player-actions/remove-player-from-squad/removePlayerFromSquadSlice'
import disbandSquadReducer from './features/squad-actions/disband/disbandSlice'
import steamInfoReducer from './features/player-actions/steam-info/steamInfoSlice'
import modalReducer from './features/modal/modalSlice'
import searchPlayerReducer from './features/player-actions/search-players/searchPlayerSlice'
import logoutReducer from './features/logout/logoutSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    verify: verifyReducer,
    players: getPlayersReducer,
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
  // middleware: {}
})
