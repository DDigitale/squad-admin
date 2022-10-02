import axios from 'axios'
import {
  API_URL,
  BAN_PLAYER,
  DISBAND_SQUAD,
  GET_ADMINS_ACTIONS,
  GET_ADMINS,
  GET_CHAT_MESSAGES,
  GET_DISCONNECTED_PLAYERS,
  GET_ONLINE_PLAYERS,
  GET_PLAYER,
  GET_PLAYER_MESSAGES,
  GET_PLAYERS,
  GET_SERVER_INFO,
  KICK_PLAYER,
  PLAYER_TEAM_CHANGE,
  REMOVE_PLAYER_FROM_SQUAD,
  WARN_PLAYER,
  GET_PLAYER_NOTES,
  NOTE_PLAYER,
  DELETE_PLAYER_NOTE,
  GET_PLAYER_PUNISHMENT_HISTORY,
} from 'config'
// @ts-ignore
import jsonBigInt from 'json-bigint'
import { extendData } from 'utils'
import {
  Ban,
  ChatMessage,
  DisconnectedPlayer,
  Message,
  Player,
  Team,
} from 'types/players'

export const JSONbig = jsonBigInt({ storeAsString: true })

export const fetchChatMessages = async (): Promise<ChatMessage[]> => {
  try {
    const response = await axios.get(API_URL + GET_CHAT_MESSAGES, {
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
    const transformedData = response.data.map((message: any) => ({
      ...message,
      time: new Date(Date.parse(message.time)),
    }))
    return transformedData
  } catch (e) {
    throw new Error('Ошибка в получении данных')
  }
}

// transformResponse: (data) => {
//   return JSON.parse(data, (key, value) => {
//     if (key === 'creationTime') return new Date(Date.parse(value))
//     return value
//   })
// },

export const fetchServerInfo = async () => {
  try {
    const response = await axios.get(API_URL + GET_SERVER_INFO, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.data
  } catch (e) {
    throw new Error('Ошибка в получении данных')
  }
}

export interface IFetchAdminsLog {
  previousPage: number
  nextPage: number
  totalPages: number
  totalElements: number
  hasPrevious: boolean
  hasNext: boolean
  currentPage: number
  content: any
  reason: string
  createTime: string
  action: string
  playerByAdminId: {
    steamId: string
    createTime: string
    playersNotesBySteamId: number
    name: string
    playersBansBySteamId: number
    playersKicksBySteamId: number
    playersMessagesBySteamId: number
  }
  id: number
}

export const fetchAdminsLog = async (
  page: number
): Promise<IFetchAdminsLog> => {
  const response = await axios.post<IFetchAdminsLog>(
    API_URL + GET_ADMINS_ACTIONS,
    {
      page,
      size: 20,
    },
    {
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      transformResponse: [
        (data) => {
          return JSONbig.parse(data)
        },
      ],
    }
  )
  return response.data
}

export const fetchAdmins = async () => {
  const response = await axios.post(
    API_URL + GET_ADMINS,
    {
      page: 1,
      size: 30,
    },
    {
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  )
  return response.data
}

export const fetchPlayer = async (steamId: string) => {
  const response = await axios.post(
    API_URL + GET_PLAYER,
    {
      steamId,
    },
    {
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      transformResponse: [
        (data) => {
          return JSONbig.parse(data)
        },
      ],
    }
  )

  return response.data
}

export interface IFetchPlayers {
  content: Player[]
  currentPage: number
  hasNext: boolean
  hasPrevious: boolean
  nextPage: number
  previousPage: number
  totalPages: number
  totalPlayers: number
  totalElements: number
  page: number
  hasMore: any
}

export const fetchPlayers = async (page: number): Promise<IFetchPlayers> => {
  const response = await axios.post<IFetchPlayers>(
    API_URL + GET_PLAYERS,
    {
      page,
      size: 40,
    },
    {
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      transformResponse: [
        (data) => {
          return JSONbig.parse(data)
        },
      ],
    }
  )

  return response.data
}

export interface IGetOnline {
  teams: Team[]
}

export const fetchTeams = async (): Promise<Team[]> => {
  const response = await axios.get<IGetOnline>(API_URL + GET_ONLINE_PLAYERS, {
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

export const fetchDisconnectedPlayers = async (): Promise<
  DisconnectedPlayer[]
> => {
  const response = await axios.get(API_URL + GET_DISCONNECTED_PLAYERS, {
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
  return response.data.reverse()
}

export const fetchPlayerNotes = async (playerSteamId: string) => {
  try {
    const response = await axios.post(
      API_URL + GET_PLAYER_NOTES,
      { playerSteamId },
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        transformResponse: [
          (data) => {
            return JSONbig.parse(data)
          },
        ],
      }
    )
    if (!Array.isArray(response.data)) {
      throw new Error('Ошибка в получении данных')
    }

    return response.data.reverse()
  } catch (e) {
    throw new Error('Ошибка в получении данных')
  }
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

    return response.data.reverse()
  } catch (e) {
    throw new Error('Ошибка в получении данных')
  }
}

// transformResponse: (data) => {
//   return JSON.parse(data, (key, value) => {
//     const dateStrings = [
//       'creationTime',
//       'expirationTime',
//       'unbannedTime',
//     ]
//
//     if (dateStrings.includes(key) && value !== null)
//       return new Date(Date.parse(value))
//     return value
//   })
// },

export const fetchPlayerPunishmentHistory = async (playerSteamId: string) => {
  try {
    const response = await axios.post(
      API_URL + GET_PLAYER_PUNISHMENT_HISTORY,
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
    return response.data
  } catch (e) {
    throw new Error('Ошибка в получении данных')
  }
}

export const deletePlayerNote = async (
  noteId: number,
  playerSteamId: string
) => {
  try {
    const response = await axios.post(
      API_URL + DELETE_PLAYER_NOTE,
      {
        playerSteamId,
        noteId,
      },
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        transformResponse: [
          (data) => {
            return JSONbig.parse(data)
          },
        ],
      }
    )
    console.log(
      `delete note ${noteId} from player ${playerSteamId}`,
      response.data
    )
    return response.data
  } catch (e) {}
}

export const notePlayer = async (playerSteamId: string, note: string) => {
  try {
    const response = await axios.post(
      API_URL + NOTE_PLAYER,
      {
        playerSteamId,
        note,
      },
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        transformResponse: [
          (data) => {
            return JSONbig.parse(data)
          },
        ],
      }
    )
    console.log(`note ${playerSteamId} with string ${note}`, response.data)
    return response.data
  } catch (e) {}
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
  banLengthInTimeStamp: string,
  banReason: string
) => {
  try {
    const response = await axios.post(
      API_URL + BAN_PLAYER,
      {
        playerSteamId,
        banLength,
        banLengthInTimeStamp,
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
