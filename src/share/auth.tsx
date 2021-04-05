import AsyncStorage from '@react-native-community/async-storage'
import { TLoginInput, TLoginResponse } from './types'

import { API_URL, AUTH_TOKEN_KEY } from './config'

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

export const login = async (
  loginInput: TLoginInput,
): Promise<TLoginResponse> => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
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
