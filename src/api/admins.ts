import axios from 'axios'
import {
  ADD_ADMIN,
  ADD_ROLE_GROUP,
  ADD_ROLE_IN_ROLE_GROUP,
  API_URL,
  DELETE_ADMIN,
  GET_ALL_ROLE_GROUPS,
  GET_ALL_ROLES,
  GET_BACKEND_STATUS,
  GET_MY_ROLE_GROUP,
  GET_ROLE,
  GET_ROLE_GROUP,
  GET_RULES,
  REMOVE_ROLE_FROM_ROLE_GROUP,
  REMOVE_ROLE_GROUP,
  SET_ROLE_GROUP_TO_ADMIN,
  SET_RULES,
} from 'config'
import { errorToast, successToast } from 'utils/toasts'

export const fetchAddAdmin = async (adminSteamId: string | number) => {
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
    //проверка на существующего админа 409 ошибка
    errorToast(`Не удалось добавить админа: ${e.message}`)
  }
}

export const fetchDeactivateAdmin = async (adminSteamId: string | number) => {
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
    errorToast(`Не получить данные о сервере: ${e.message}`)
  }
}

export const fetchGetRules = async () => {
  try {
    const response = await axios.get(API_URL + GET_RULES, {
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    return response.data
  } catch (e: any) {
    errorToast(`Не удалось получить список опций: ${e.message}`)
  }
}

export const fetchSetRules = async (optionsData: any) => {
  try {
    const response = await axios.post(
      API_URL + SET_RULES,
      {
        ruleGroup: JSON.parse(optionsData),
      },
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    return response.data
  } catch (e: any) {
    errorToast(`Не удалось загрузить список опций: ${e.message}`)
  }
}

export const fetchGetMyRoleGroup = async () => {
  try {
    const response = await axios.get(API_URL + GET_MY_ROLE_GROUP, {
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    return response.data
  } catch (e: any) {
    errorToast(`Не удалось получить список ролей: ${e.message}`)
  }
}

export const fetchGetRoleGroup = async (roleGroupId: number) => {
  try {
    const response = await axios.get(API_URL + GET_ROLE_GROUP, {
      params: { roleGroupId: roleGroupId },
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    return response.data
  } catch (e: any) {
    errorToast(`Не удалось получить список опций: ${e.message}`)
  }
}

export const fetchGetAllRoleGroups = async () => {
  try {
    const response = await axios.get(API_URL + GET_ALL_ROLE_GROUPS, {
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    return response.data
  } catch (e: any) {
    errorToast(`Не удалось получить список опций: ${e.message}`)
  }
}

export const fetchGetRole = async (roleId: number) => {
  try {
    const response = await axios.get(API_URL + GET_ROLE, {
      params: { roleId: roleId },
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    return response.data
  } catch (e: any) {
    errorToast(`Не удалось получить список опций: ${e.message}`)
  }
}

export const fetchGetAllRoles = async () => {
  try {
    const response = await axios.get(API_URL + GET_ALL_ROLES, {
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    return response.data
  } catch (e: any) {
    errorToast(`Не удалось получить список опций: ${e.message}`)
  }
}

export const fetchAddRoleInRoleGroup = async (
  roleId: number,
  roleGroupId: number
) => {
  try {
    const response = await axios.post(
      API_URL + ADD_ROLE_IN_ROLE_GROUP,
      { role: { id: roleId }, roleGroup: { id: roleGroupId } },
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    successToast(`Роль добавлена`)
    return response.data
  } catch (e: any) {
    errorToast(`Не удалось получить список опций: ${e.message}`)
  }
}

export const fetchAddRoleGroup = async (roleGroupName: any) => {
  try {
    const response = await axios.post(
      API_URL + ADD_ROLE_GROUP,
      { name: roleGroupName },
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    successToast(`Группа ролей добавлена`)
    return response.data
  } catch (e: any) {
    errorToast(`Не удалось добавить группу ролей: ${e.message}`)
  }
}

export const fetchRemoveRoleGroup = async (roleGroupId: number) => {
  try {
    const response = await axios.post(
      API_URL + REMOVE_ROLE_GROUP,
      { roleGroupId: roleGroupId },
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
    successToast(`Группа ролей удалена`)
    return response.data
  } catch (e: any) {
    errorToast(`Не удалось получить список опций: ${e.message}`)
  }
}

export const fetchRemoveRoleFromRoleGroup = async (
  roleId: number,
  roleGroupId: number
) => {
  try {
    const response = await axios.post(
      API_URL + REMOVE_ROLE_FROM_ROLE_GROUP,
      { roleId, roleGroupId },
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
    return response.data
  } catch (e: any) {
    errorToast(`Не удалось получить список опций: ${e.message}`)
  }
}

export const fetchSetRoleGroupToAdmin = async (
  roleGroupId: string,
  adminSteamId: any
) => {
  try {
    const response = await axios.post(
      API_URL + SET_ROLE_GROUP_TO_ADMIN,
      { roleGroupId: roleGroupId, adminSteamId: adminSteamId },
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
    successToast(`Роль изменена`)
    return response.data
  } catch (e: any) {
    errorToast(`Не удалось получить список опций: ${e.message}`)
  }
}
