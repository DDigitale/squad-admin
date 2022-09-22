import axios from 'axios'
import jsonBigInt from 'json-bigint'
import {
  API_URL,
  GET_ONLINE,
  GET_PLAYER_BANS,
  GET_PLAYER_KICKS,
  GET_PLAYER_MESSAGES,
} from '../config/api-config'
import { extendData } from '../utils/extendPlayers'
import disconnectedPlayers from '../modules/disconnected-players/DisconnectedPlayers'

export const JSONbig = jsonBigInt({ storeAsString: true })

export const fetchTeams = async () => {
  const response = await axios.get(API_URL + GET_ONLINE, {
    withCredentials: 'true',
    headers: {
      'Content-Type': 'application/json',
    },
    transformResponse: [
      (data) => {
        return JSONbig.parse(data)
      },
    ],
  })
  extendData(response.data)
  return response.data.teams
}

export const fetchDisconnectedPlayers = async () => {
  const response = await axios.get(API_URL + GET_ONLINE, {
    withCredentials: 'true',
    headers: {
      'Content-Type': 'application/json',
    },
    transformResponse: [
      (data) => {
        return JSONbig.parse(data)
      },
    ],
  })
  extendData(response.data)
  return response.data.disconnectedPlayers
}

export const fetchPlayerMessages = async (playerSteamId) => {
  try {
    const response = await axios.post(
      API_URL + GET_PLAYER_MESSAGES,
      { playerSteamId },
      {
        withCredentials: 'true',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
    if (!Array.isArray(response.data)) {
      throw new Error('Ошибка в получении данных')
    }
    return response.data
  } catch (e) {
    throw new Error('Ошибка в получении данных')
  }
}

export const fetchPlayerBans = async (playerSteamId) => {
  try {
    const response = await axios.post(
      API_URL + GET_PLAYER_BANS,
      { playerSteamId },
      {
        withCredentials: 'true',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
    if (!Array.isArray(response.data)) {
      throw new Error('Ошибка в получении данных')
    }
    return response.data
  } catch (e) {
    throw new Error('Ошибка в получении данных')
  }
}

const fetchPlayerKicks = async (playerSteamId) => {
  try {
    const response = await axios.post(
      API_URL + GET_PLAYER_KICKS,
      { playerSteamId },
      {
        withCredentials: 'true',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
    if (!Array.isArray(response.data)) {
      throw new Error('Ошибка в получении данных')
    }
    return response.data
  } catch (e) {
    throw new Error('Ошибка в получении данных')
  }
}
