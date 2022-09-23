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
} from 'config/api-config'
import { extendData } from 'utils/extendPlayers'
import { Ban, DisconnectedPlayer, Message, Team } from 'types/player'

export const JSONbig = jsonBigInt({ storeAsString: true })

export interface IGetOnline {
  teams: Team[]
  disconnectedPlayers: DisconnectedPlayer[]
}

export const fetchTeams = async (): Promise<Team[]> => {
  const response = await axios.get<IGetOnline>(API_URL + GET_ONLINE, {
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

interface IFetchDisconnectedPlayers {
  teams: Team[]
  disconnectedPlayers: DisconnectedPlayer[]
}

export const fetchDisconnectedPlayers = async (): Promise<
  DisconnectedPlayer[]
> => {
  const response = await axios.get<IFetchDisconnectedPlayers>(
    API_URL + GET_ONLINE,
    {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
      transformResponse: [
        (data) => {
          return JSONbig.parse(data)
        },
      ],
    }
  )
  return response.data.disconnectedPlayers
}

export const fetchPlayerMessages = async (playerSteamId: string) => {
  try {
    const response = await axios.post<Message[]>(
      API_URL + GET_PLAYER_MESSAGES,
      { playerSteamId },
      {
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

    return response.data
  } catch (e) {
    throw new Error('Ошибка в получении данных')
  }
}

// type IFetchPlayerBans = {
//   creationTime: string
//   expirationTime: string
//   id: number
//   isUnbannedManually: boolean
//   reason: string
//   unbannedTime: string | null
// }[]

export const fetchPlayerBans = async (
  playerSteamId: string
): Promise<Ban[]> => {
  try {
    const response = await axios.post(
      API_URL + GET_PLAYER_BANS,
      { playerSteamId },
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        transformResponse: (data) => {
          return JSON.parse(data, (key, value) => {
            const dateStrings = [
              'creationTime',
              'expirationTime',
              'unbannedTime',
            ]

            if (dateStrings.includes(key) && value !== null)
              return new Date(Date.parse(value))
            return value
          })
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
