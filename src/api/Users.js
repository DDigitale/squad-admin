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

export const JSONbig = jsonBigInt({ storeAsString: true })

const fetchPlayer = async (playerSteamId) => {
  const players = await fetchTeams()
  const player = players.find()
  const playerBans = await fetchPlayerBans(playerSteamId)
  const playerKicks = await fetchPlayerKicks(playerSteamId)
  const playerMessages = await fetchPlayerMessages(playerSteamId)
  return {
    ...player,
    bans: playerBans,
    kicks: playerKicks,
    messages: playerMessages,
  }
}

export const fetchTeams = async () => {
  try {
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
    console.log('fetchPlayers', response.data)
    return response.data.teams
  } catch (error) {
    console.log(error)
  }
}

export const fetchDisconnectedPlayers = async () => {
  try {
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
    console.log('fetchPlayers', response.data)
    return response.data.disconnectedPlayers
  } catch (error) {
    console.log(error)
  }
}

const fetchPlayerMessages = async (playerSteamId) => {
  try {
    const response = await axios.post(
      API_URL + GET_PLAYER_MESSAGES,
      { playerSteamId },
      {
        withCredentials: 'true',
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
    console.log(response.data)
    return response.data
  } catch (e) {
    console.log(e)
  }
}

const fetchPlayerBans = async (playerSteamId) => {
  try {
    const response = await axios.post(
      API_URL + GET_PLAYER_BANS,
      { playerSteamId },
      {
        withCredentials: 'true',
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
    console.log(response.data)
    return response.data
  } catch (e) {
    console.log(e)
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
        transformResponse: [
          (data) => {
            return JSONbig.parse(data)
          },
        ],
      }
    )
    console.log(response.data)
    return response.data
  } catch (e) {
    console.log(e)
  }
}

// } catch (error) {
//   console.log(error)
//   const message =
//     (error.response &&
//       error.response.data &&
//       error.response.data.message) ||
//     error.message ||
//     error.toString()
//   return thunkAPI.rejectWithValue(message)
