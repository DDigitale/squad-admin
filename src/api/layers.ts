import axios from 'axios'
import {
  API_URL,
  CHANGE_CURRENT_LAYER,
  CHANGE_NEXT_LAYER,
  GET_LAYERS_HISTORY,
} from 'config'
import { errorToast, successToast } from 'utils/toasts'

export const changeCurrentLayer = async (layerName: any) => {
  try {
    const response = await axios.post(
      API_URL + CHANGE_CURRENT_LAYER,
      {
        layerName,
      },
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
    successToast(`Вы сменили текущий леер на ${layerName}`)
    return response.data
  } catch (e) {
    errorToast(`Ошибка смены карты`)
  }
}

export const changeNextLayer = async (layerName: any) => {
  try {
    const response = await axios.post(
      API_URL + CHANGE_NEXT_LAYER,
      {
        layerName,
      },
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
    successToast(`Вы сменили следующий леер на ${layerName}`)
    return response.data
  } catch (e) {
    errorToast(`Ошибка смены карты`)
  }
}

export const fetchLayersHistory = async (layerName: any) => {
  try {
    const response = await axios.post(
      API_URL + GET_LAYERS_HISTORY,
      {
        layerName,
        page: 0,
        size: 15,
      },
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
    return response.data
  } catch (e) {
    errorToast(`Ошибка подгрузки истории лееров`)
  }
}
