import axios from 'axios'
import {
  API_URL,
  BAN_PLAYER,
  DELETE_PLAYER_NOTE,
  DISBAND_SQUAD,
  GET_ADMINS,
  GET_ADMINS_ACTIONS,
  GET_CHAT_MESSAGES,
  GET_DISCONNECTED_PLAYERS,
  GET_ONLINE_PLAYERS,
  GET_PLAYER,
  GET_PLAYER_MESSAGES,
  GET_PLAYER_NOTES,
  GET_PLAYER_PUNISHMENT_HISTORY,
  GET_PLAYERS,
  GET_PLAYERS_BY_CONTAINS_TEXT,
  GET_SERVER_INFO,
  GET_STEAM_INFO,
  KICK_PLAYER,
  NOTE_PLAYER,
  PLAYER_TEAM_CHANGE,
  REMOVE_PLAYER_FROM_SQUAD,
  SEND_BROADCAST,
  UNBAN_PLAYER,
  WARN_PLAYER,
} from 'config'
// @ts-ignore
import jsonBigInt from 'json-bigint'
import { extendData } from 'utils'
import {
  ChatMessage,
  DisconnectedPlayer,
  Message,
  Player,
  Team,
} from 'types/players'
import { errorToast, successToast } from 'utils/toasts'
import toast from 'react-hot-toast'

export const JSONbig = jsonBigInt({ storeAsString: true })

export const sendBroadcastMessage = async (broadcastMessage: string) => {
  try {
    const response = await axios.post(
      API_URL + SEND_BROADCAST,
      {
        broadcastMessage,
      },
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
    successToast(`Сообщение ${broadcastMessage} отправлено`)
    return response.data
  } catch (e: any) {
    errorToast(`Ошибка отправки сообщения: ${e.message}`)
  }
}

export const fetchPlayerSearch = async (text: string) => {
  const response = await axios.post(
    API_URL + GET_PLAYERS_BY_CONTAINS_TEXT,
    {
      text,
      maxSize: 10,
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

export const fetchChatMessages = async (): Promise<
  ChatMessage[] | undefined
> => {
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
    return response.data.map((message: any) => ({
      ...message,
      time: new Date(Date.parse(message.time)),
    }))
  } catch (e: any) {}
}

export const fetchServerInfo = async () => {
  try {
    const response = await axios.get(API_URL + GET_SERVER_INFO, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.data
  } catch (e: any) {}
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
      size: 50,
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

  console.log(response)

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
      }
    )

    // if (!Array.isArray(response.data)) {
    //   throw new Error('Ошибка в получении данных')
    // }

    return response.data.reverse()
  } catch (e: any) {
    errorToast(`Запрос заметок: ${e.message}`)
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
    // if (!Array.isArray(response.data)) {
    //   errorToast(`Запрос сообщений игрока`)
    // }

    return response.data.reverse()
  } catch (e: any) {
    errorToast(`Запрос сообщений игрока: ${e.message}`)
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
  } catch (e: any) {
    errorToast(`Запрос наказаний игрока: ${e.message}`)
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
      }
    )
    successToast(`Заметка удалена`)
    return response.data
  } catch (e: any) {
    errorToast(`Ошибка удаления заметки`)
  }
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
      }
    )
    successToast(`Заметка добавлена`)
    return response.data
  } catch (e: any) {
    console.log(e)
    errorToast(`Ошибка добавления заметки`)
  }
}

export const warnPlayer = async (
  playerSteamId: string,
  warnReason: string,
  name: string
) => {
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
    successToast(`Сообщение игроку ${name} с текстом ${warnReason} отправлено`)
    return response.data
  } catch (e: any) {
    errorToast(`Сообщение игроку: ${e.message}`)
  }
}

export const kickPlayer = async (
  playerSteamId: string,
  kickReason: string,
  name: string
) => {
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
    successToast(`Вы кикнули игрока ${name} по причине "${kickReason}"`)
    return response.data
  } catch (e: any) {
    errorToast(`Кик игрока: ${e.message}`)
  }
}

export const banPlayer = async (
  playerSteamId: string,
  banLength: string,
  banLengthInTimeStamp: string,
  banReason: string,
  name: string
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
    successToast(
      `Вы забанили игрока ${name} на срок ${banLength} по причине "${banReason}"`
    )
    return response.data
  } catch (e: any) {
    errorToast(`Бан игрока: ${e.message}`)
  }
}

export const unbanPlayer = async (banId: number) => {
  try {
    const response = await axios.post(
      API_URL + UNBAN_PLAYER,
      {
        banId,
      },
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
    successToast(`Игрок разбанен`)
    return response.data
  } catch (e: any) {
    errorToast(`Разбан игрока: ${e.message}`)
  }
}

export const teamChangePlayer = async (playerSteamId: string, name: string) => {
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
    successToast(`Вы сменили команду игроку ${name}`)
    return response.data
  } catch (e: any) {
    errorToast(`Смена команды: ${e.message}`)
  }
}

export const removePlayerFromSquad = async (
  playerSteamId: string,
  name: string
) => {
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
    successToast(`Вы выгнали из отряда игрока ${name}`)
    return response.data
  } catch (e: any) {
    errorToast(`Выгнать игрока из отряда: ${e.message}`)
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
    successToast(
      `Вы расформировали отряд ${squadId}: ${squadName} в команде ${teamId}`
    )
    return response.data
  } catch (e: any) {
    errorToast(`Расформирование отряда: ${e.message}`)
  }
}
