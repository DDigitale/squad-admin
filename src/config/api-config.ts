const server = localStorage.getItem('server')

const API_URL = `http://localhost:${server ? server : 8000}`
const API_URL_WITHOUT_PORT = 'http://localhost:'
const CALLBACK_URL = 'http://localhost:3000'
const STEAM_KEY = 'D24E3D9EB90500EB1979B72B06B4D903'
const GET_STEAM_LINK = '/get-steam-link'
const VERIFY_STEAM = '/verify-steam'
const AUTH = '/auth'
const LOGOUT = '/user-logout'
const ADD_PlAYER = '/add-player'
const GET_ONLINE_PLAYERS = '/get-online-players'
const GET_DISCONNECTED_PLAYERS = '/get-disconnected-players'
const GET_ADMINS = '/get-admins'
const GET_ADMINS_ACTIONS = '/get-admin-actions-with-params'
const GET_ADMIN_ACTIONS_WITH_PLAYER = '/get-admin-actions-with-player'
const GET_ALL_BANS_BY_PARAMS = '/get-all-bans-by-params'
const GET_ACTIVE_BANS_BY_PARAMS = '/get-active-bans-by-params'
const GET_PERMANENT_BANS_BY_PARAMS = '/get-permanent-bans-by-params'
const GET_NOT_ACTIVE_BANS_BY_PARAMS = '/get-not-active-bans-by-params'
const GET_PLAYER = '/get-player'
const GET_PLAYERS = '/get-players'
const GET_PLAYER_MESSAGES = '/get-player-messages'
const GET_PLAYER_NOTES = '/get-player-notes'
const GET_PLAYER_PUNISHMENT_HISTORY = '/get-player-punishment-history'
const GET_PLAYERS_BY_CONTAINS_TEXT = '/get-players-by-contains-text'
const ADD_PLAYER_ON_CONTROL = '/add-player-on-control'
const REMOVE_PLAYER_ON_CONTROL = '/remove-player-from-control'
const GET_SERVER_INFO = '/get-server-info'
const GET_CHAT_MESSAGES = '/get-chat-messages'
const GET_STEAM_INFO = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${STEAM_KEY}&steamids=`
const GET_LAYERS_HISTORY = '/get-layers-history'
const GET_MESSAGES = '/get-messages-by-contains-text'
const BAN_PLAYER = '/ban-player'
const UNBAN_PLAYER = '/unban-player'
const KICK_PLAYER = '/kick-player'
const WARN_PLAYER = '/warn-player'
const WARN_SQUAD = '/warn-squad'
const NOTE_PLAYER = '/add-player-note'
const DELETE_PLAYER_NOTE = '/delete-player-note'
const PLAYER_TEAM_CHANGE = '/player-team-change'
const REMOVE_PLAYER_FROM_SQUAD = '/remove-player-from-squad'
const DISBAND_SQUAD = '/disband-squad'
const CHANGE_CURRENT_LAYER = '/change-current-layer'
const CHANGE_NEXT_LAYER = '/change-next-layer'
const SEND_BROADCAST = '/send-broadcast'
const ADD_ADMIN = '/add-admin'
const DELETE_ADMIN = '/deactivate-admin'
const GET_ME = '/get-me'
const GET_BACKEND_STATUS = '/get-backend-status'
const GET_RULES = '/get-rules'
const SET_RULES = '/set-rules'
const GET_MY_ROLE_GROUP = '/get-my-role-group'
const GET_ROLE_GROUP = '/get-role-group'
const GET_ALL_ROLE_GROUPS = '/get-all-role-groups'
const GET_ROLE = '/get-role'
const GET_ALL_ROLES = '/get-all-roles'
const ADD_ROLE_IN_ROLE_GROUP = '/add-role-in-role-group'
const ADD_ROLE_GROUP = '/add-role-group'
const REMOVE_ROLE_GROUP = '/remove-role-group'
const REMOVE_ROLE_FROM_ROLE_GROUP = '/remove-role-from-role-group'
const SET_ROLE_GROUP_TO_ADMIN = '/set-role-group-to-admin'
const GET_ALL_LAYERS = '/get-maps'
const ADD_NEW_ROTATION_GROUP = '/add-new-rotation-group'
const GET_ALL_ROTATION_GROUPS = '/get-all-rotation-groups'
const DELETE_ROTATION_GROUP = '/delete-rotation-group'
const CHANGE_ROTATION_GROUP = '/change-rotation-group'
const ACTIVATE_ROTATION_GROUP = '/activate-rotation-group'

export {
  API_URL,
  API_URL_WITHOUT_PORT,
  CALLBACK_URL,
  GET_STEAM_LINK,
  VERIFY_STEAM,
  AUTH,
  LOGOUT,
  ADD_PlAYER,
  GET_ONLINE_PLAYERS,
  GET_DISCONNECTED_PLAYERS,
  GET_ADMINS,
  GET_ADMINS_ACTIONS,
  GET_ADMIN_ACTIONS_WITH_PLAYER,
  GET_ALL_BANS_BY_PARAMS,
  GET_ACTIVE_BANS_BY_PARAMS,
  GET_PERMANENT_BANS_BY_PARAMS,
  GET_NOT_ACTIVE_BANS_BY_PARAMS,
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
  WARN_SQUAD,
  NOTE_PLAYER,
  DELETE_PLAYER_NOTE,
  PLAYER_TEAM_CHANGE,
  REMOVE_PLAYER_FROM_SQUAD,
  DISBAND_SQUAD,
  CHANGE_CURRENT_LAYER,
  CHANGE_NEXT_LAYER,
  SEND_BROADCAST,
  ADD_ADMIN,
  DELETE_ADMIN,
  GET_ME,
  ADD_PLAYER_ON_CONTROL,
  REMOVE_PLAYER_ON_CONTROL,
  GET_BACKEND_STATUS,
  GET_LAYERS_HISTORY,
  GET_MESSAGES,
  GET_RULES,
  SET_RULES,
  GET_MY_ROLE_GROUP,
  GET_ROLE_GROUP,
  GET_ALL_ROLE_GROUPS,
  GET_ROLE,
  GET_ALL_ROLES,
  ADD_ROLE_IN_ROLE_GROUP,
  ADD_ROLE_GROUP,
  REMOVE_ROLE_GROUP,
  REMOVE_ROLE_FROM_ROLE_GROUP,
  SET_ROLE_GROUP_TO_ADMIN,
  GET_ALL_LAYERS,
  ADD_NEW_ROTATION_GROUP,
  GET_ALL_ROTATION_GROUPS,
  DELETE_ROTATION_GROUP,
  CHANGE_ROTATION_GROUP,
  ACTIVATE_ROTATION_GROUP,
}
