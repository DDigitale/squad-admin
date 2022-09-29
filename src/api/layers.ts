import axios from 'axios'
import { API_URL, CHANGE_CURRENT_LAYER, CHANGE_NEXT_LAYER } from 'config'

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
    console.log(`CURRENT LAYER CHANGED ON ${layerName}`, response.data)
    return response.data
  } catch (e) {
    throw new Error('Ошибка в отправке данных')
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
    console.log(`NEXT LAYER CHANGED ON ${layerName}`, response.data)
    return response.data
  } catch (e) {
    throw new Error('Ошибка в отправке данных')
  }
}
