import axios from 'axios'
// @ts-ignore
import jsonBigInt from 'json-bigint'
import {
  API_URL,
  BAN_PLAYER,
  DISBAND_SQUAD,
  GET_ONLINE,
  GET_PLAYER_BANS,
  GET_PLAYER_KICKS,
  GET_PLAYER_MESSAGES,
  KICK_PLAYER,
  PLAYER_TEAM_CHANGE,
  REMOVE_PLAYER_FROM_SQUAD,
  WARN_PLAYER,
} from '../config/api-config'
import { extendData } from '../utils/extendPlayers'
import { DisconnectedPlayer, Message, Team } from '../types/player'

export const JSONbig = jsonBigInt({ storeAsString: true })

export interface IGetOnline {
  teams: Team[]
  disconnectedPlayers: DisconnectedPlayer[]
}

export const fetchTeams = async (): Promise<Team[]> => {
  const response = await axios.get<IGetOnline>(API_URL + GET_ONLINE, {
    credentials: '',
    withCredentials: true,
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
    credentials: '',
    withCredentials: true,
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

export const fetchPlayerMessages = async (playerSteamId: string) => {
  try {
    const response = await axios.post<Message[]>(
      API_URL + GET_PLAYER_MESSAGES,
      { playerSteamId },
      {
        credentials: '',
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        transformResponse: (data) => {
          return JSON.parse(data, (key, value) => {
            if (key === 'creationTime') return new Date(Date.parse(value))
            return value
          })
        },
      }
    )
    if (!Array.isArray(response.data)) {
      throw new Error('Ошибка в получении данных')
    }
    console.log('123', response.data)
    return response.data
  } catch (e) {
    throw new Error('Ошибка в получении данных')
  }
}

export const fetchPlayerBans = async (playerSteamId: string) => {
  try {
    const response = await axios.post(
      API_URL + GET_PLAYER_BANS,
      { playerSteamId },
      {
        credentials: '',
        withCredentials: true,
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

const fetchPlayerKicks = async (playerSteamId: string) => {
  try {
    const response = await axios.post(
      API_URL + GET_PLAYER_KICKS,
      { playerSteamId },
      {
        credentials: '',
        withCredentials: true,
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

export const warnPlayer = async (playerSteamId: string, warnReason: string) => {
  try {
    const response = await axios.post(
      API_URL + WARN_PLAYER,
      {
        playerSteamId,
        warnReason,
      },
      {
        credentials: '',
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
    console.log(
      `WARN ${playerSteamId} with reason ${warnReason}`,
      response.data
    )
    return response.data
  } catch (e) {}
}

export const kickPlayer = async (playerSteamId: string, kickReason: string) => {
  try {
    const response = await axios.post(
      API_URL + KICK_PLAYER,
      {
        playerSteamId,
        kickReason,
      },
      {
        credentials: '',
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
    console.log(
      `KICK ${playerSteamId} with reason ${kickReason}`,
      response.data
    )
    return response.data
  } catch (e) {
    throw new Error('Ошибка в отправке данных')
  }
}

export const banPlayer = async (
  playerSteamId: string,
  banLength: string,
  banReason: string
) => {
  try {
    const response = await axios.post(
      API_URL + BAN_PLAYER,
      {
        playerSteamId,
        banLength,
        banReason,
      },
      {
        credentials: '',
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
    console.log(
      `BAN ${playerSteamId} with reason ${banReason} and length ${banLength}`,
      response.data
    )
    return response.data
  } catch (e) {
    throw new Error('Ошибка в отправке данных')
  }
}

export const teamChangePlayer = async (playerSteamId: string) => {
  try {
    const response = await axios.post(
      API_URL + PLAYER_TEAM_CHANGE,
      {
        playerSteamId,
      },
      {
        credentials: '',
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
    console.log(`TEAM CHANGED ${playerSteamId}`, response.data)
    return response.data
  } catch (e) {
    throw new Error('Ошибка в отправке данных')
  }
}

export const removePlayerFromSquad = async (playerSteamId: string) => {
  try {
    const response = await axios.post(
      API_URL + REMOVE_PLAYER_FROM_SQUAD,
      {
        playerSteamId,
      },
      {
        credentials: '',
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
    console.log(`REMOVE FROM SQUAD ${playerSteamId}`, response.data)
    return response.data
  } catch (e) {
    throw new Error('Ошибка в отправке данных')
  }
}

export const disbandSquad = async (
  teamId: number,
  squadId: number,
  squadName: string
) => {
  try {
    const response = await axios.post(
      API_URL + DISBAND_SQUAD,
      {
        teamId,
        squadId,
        squadName,
      },
      {
        credentials: '',
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
    console.log(`DISBAND SQUAD ${squadId} FROM ${teamId} TEAM`, response.data)
    return response.data
  } catch (e) {
    throw new Error('Ошибка в отправке данных')
  }
}
