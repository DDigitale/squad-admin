const API_URL = 'http://localhost:8000'
const CALLBACK_URL = 'http://localhost:3000/'
const STEAM_KEY = 'D24E3D9EB90500EB1979B72B06B4D903'
const GET_STEAM_LINK = '/get-steam-link'
const VERIFY_STEAM = '/verify-steam'
const AUTH = '/auth'
const LOGOUT = '/logout'
const GET_ONLINE_PLAYERS = '/get-online-players'
const GET_DISCONNECTED_PLAYERS = '/get-disconnected-players'
const GET_ADMINS = '/get-admins'
const GET_ADMINS_ACTIONS = '/get-admins-actions'
const GET_PLAYER = '/get-player'
const GET_PLAYERS = '/get-players'
const GET_PLAYER_MESSAGES = '/get-player-messages'
const GET_PLAYER_NOTES = '/get-player-notes'
const GET_PLAYER_PUNISHMENT_HISTORY = '/get-player-punishment-history'
const GET_PLAYERS_BY_CONTAINS_TEXT = '/get-players-by-contains-text'
const GET_SERVER_INFO = '/get-server-info'
const GET_CHAT_MESSAGES = '/get-chat-messages'
const GET_STEAM_INFO = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${STEAM_KEY}&steamids=`
const BAN_PLAYER = '/ban-player'
const UNBAN_PLAYER = '/unban-player'
const KICK_PLAYER = '/kick-player'
const WARN_PLAYER = '/warn-player'
const NOTE_PLAYER = '/add-player-note'
const DELETE_PLAYER_NOTE = '/delete-player-note'
const PLAYER_TEAM_CHANGE = '/player-team-change'
const REMOVE_PLAYER_FROM_SQUAD = '/remove-player-from-squad'
const DISBAND_SQUAD = '/disband-squad'
const CHANGE_CURRENT_LAYER = '/change-current-layer'
const CHANGE_NEXT_LAYER = '/change-next-layer'
const SEND_BROADCAST = '/send-broadcast'

export {
  API_URL,
  CALLBACK_URL,
  GET_STEAM_LINK,
  VERIFY_STEAM,
  AUTH,
  LOGOUT,
  GET_ONLINE_PLAYERS,
  GET_DISCONNECTED_PLAYERS,
  GET_ADMINS,
  GET_ADMINS_ACTIONS,
  GET_PLAYER,
  GET_PLAYERS,
  GET_PLAYER_MESSAGES,
  GET_PLAYER_NOTES,
  GET_PLAYER_PUNISHMENT_HISTORY,
  GET_PLAYERS_BY_CONTAINS_TEXT,
  GET_SERVER_INFO,
  GET_CHAT_MESSAGES,
  GET_STEAM_INFO,
  BAN_PLAYER,
  UNBAN_PLAYER,
  KICK_PLAYER,
  WARN_PLAYER,
  NOTE_PLAYER,
  DELETE_PLAYER_NOTE,
  PLAYER_TEAM_CHANGE,
  REMOVE_PLAYER_FROM_SQUAD,
  DISBAND_SQUAD,
  CHANGE_CURRENT_LAYER,
  CHANGE_NEXT_LAYER,
  SEND_BROADCAST,
}
