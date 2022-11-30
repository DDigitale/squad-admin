import axios from 'axios'
import { ADD_ADMIN, API_URL, DELETE_ADMIN, GET_BACKEND_STATUS } from 'config'
import { errorToast, successToast } from 'utils/toasts'

export const fetchAddAdmin = async (adminSteamId: number) => {
  try {
    const response = await axios.post(
      API_URL + ADD_ADMIN,
      { adminSteamId },
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
    successToast(`Админ добавлен`)
  } catch (e: any) {
    errorToast(`Не удалось добавить админа: ${e.message}`)
  }
}

export const fetchDeactivateAdmin = async (adminSteamId: number) => {
  try {
    const response = await axios.post(
      API_URL + DELETE_ADMIN,
      { adminSteamId },
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
    successToast(`Админ удалён`)
  } catch (e: any) {
    errorToast(`Не удалось удалить админа: ${e.message}`)
  }
}

export const fetchBackendStatus = async () => {
  try {
    const response = await axios.get(API_URL + GET_BACKEND_STATUS, {
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    return response.data
  } catch (e: any) {
    errorToast(`Не удалось удалить админа: ${e.message}`)
  }
}
