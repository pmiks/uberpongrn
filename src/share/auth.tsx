import AsyncStorage from '@react-native-community/async-storage'
import { TLoginInput, TLoginResponse, TGame } from './types'

import { API_URL, AUTH_TOKEN_KEY, USER_NAME_KEY } from './config'

export const getAuthTokenAsync = async (
  getToken?: (token: string) => void,
): Promise<string | null> => {
  return await AsyncStorage.getItem(
    AUTH_TOKEN_KEY,
    (_?: Error, result?: string) => {
      getToken && getToken(result || '')
    },
  )
}

export const setAuthTokenAsync = async (token: string): Promise<void> => {
  await AsyncStorage.setItem(AUTH_TOKEN_KEY, token)
}

export const removeAuthTokenAsync = async (): Promise<void> => {
  await AsyncStorage.removeItem(AUTH_TOKEN_KEY)
}

export const getUserNameAsync = async (): Promise<string> => {
  return (await AsyncStorage.getItem(USER_NAME_KEY)) || ''
}

export const setUserNameAsync = async (name: string): Promise<void> => {
  await AsyncStorage.setItem(USER_NAME_KEY, name)
}

export const removeUserNameAsync = async (): Promise<void> => {
  await AsyncStorage.removeItem(USER_NAME_KEY)
}

export const login = async (
  loginInput: TLoginInput,
): Promise<TLoginResponse> => {
  //alert(JSON.stringify(loginInput))
  const response = await fetch(`${API_URL}user/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginInput),
  })

  return await response.json()
}

export const logout = async (token: string): Promise<void> => {
  const response = await fetch(`${API_URL}/logout`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    throw new Error(response.statusText)
  }
}

export const getUsers = async (): Promise<void> => {
  const token = await getAuthTokenAsync()
  const response = await fetch(`${API_URL}user`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  //alert(JSON.stringify(await response.json()))
  return await response.json()
}

export const sendGame = async (game: TGame): Promise<void> => {
  const token = await getAuthTokenAsync()
  const response = await fetch(`${API_URL}game/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(game),
  })

  return await response.json()
}
