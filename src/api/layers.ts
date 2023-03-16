import axios from 'axios'
import {
  ACTIVATE_ROTATION_GROUP,
  ADD_NEW_ROTATION_GROUP,
  API_URL,
  API_URL_WITHOUT_PORT,
  CHANGE_CURRENT_LAYER,
  CHANGE_NEXT_LAYER,
  CHANGE_ROTATION_GROUP,
  DEACTIVATE_ROTATION_GROUP,
  DELETE_ROTATION_GROUP,
  GET_ALL_LAYERS,
  GET_ALL_ROTATION_GROUPS,
  GET_LAYERS_HISTORY,
  SET_NEXT_ROTATION_MAP_POSITION,
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

export const fetchAllLayers = async () => {
  try {
    const response = await axios.get(API_URL + GET_ALL_LAYERS, {
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    return response.data
  } catch (e) {
    errorToast(`Ошибка загрузки списка лееров`)
  }
}

export const fetchAddNewRotationGroup = async (layers: any) => {
  try {
    const response = await axios.post(
      API_URL + ADD_NEW_ROTATION_GROUP,
      layers,
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    return response.data
  } catch (e) {
    errorToast(`Ошибка сохранения ротации`)
  }
}

export const fetchAllRotationGroups = async () => {
  try {
    const response = await axios.get(API_URL + GET_ALL_ROTATION_GROUPS, {
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    return response.data
  } catch (e) {
    errorToast(`Ошибка загрузки списка лееров`)
  }
}

export const fetchDeleteRotationGroup = async (rotationId: any) => {
  try {
    const response = await axios.post(
      API_URL + DELETE_ROTATION_GROUP,
      {
        roleGroupId: rotationId,
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
    errorToast(`Ошибка загрузки списка лееров`)
  }
}

export const fetchChangeRotationGroup = async (
  rotationId: any,
  layers: any,
  name: any
) => {
  try {
    const response = await axios.post(
      API_URL + CHANGE_ROTATION_GROUP,
      {
        id: rotationId,
        name: name,
        maps: layers,
      },
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    return response.data
  } catch (e) {
    errorToast(`Ошибка загрузки списка лееров`)
  }
}

export const fetchSetNextRotationMapPosition = async (position: any) => {
  try {
    const response = await axios.post(
      API_URL + SET_NEXT_ROTATION_MAP_POSITION,
      {
        position,
      },
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
    successToast(`Следующая карта установлена`)
    return response.data
  } catch (e) {
    errorToast(`Ошибка установки следующей карты`)
  }
}

export const fetchActivateRotationGroup = async (id: any, port: any) => {
  try {
    const response = await axios.post(
      API_URL_WITHOUT_PORT + port + ACTIVATE_ROTATION_GROUP,
      {
        roleGroupId: id,
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
    errorToast(`Ошибка установки ротации`)
  }
}

export const fetchDeactivateRotationGroup = async (id: any, port: any) => {
  try {
    const response = await axios.post(
      API_URL_WITHOUT_PORT + port + DEACTIVATE_ROTATION_GROUP,
      {
        roleGroupId: id,
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
    errorToast(`Ошибка деактивации ротации`)
  }
}
