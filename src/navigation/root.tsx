import { AuthStack } from './auth-navigation'
import { AppStack } from './app-navigation'
import React, { FC, useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { getAuthTokenAsync, getUserNameAsync } from '../share/auth'

import { Routes } from './routes'
import { AuthContext } from '../share/context'

const Stack = createStackNavigator()

export const RootNavigator: FC = () => {
  const [loadingUser, setLoadingUser] = useState(true)
  const [isLogin, setIsLogin] = useState<boolean>(false)
  const [currentUser, setCurrentUser] = useState<{
    username: string
    pts: number
  }>({ username: '', pts: 0 })

  const setUserData = async () => {
    let username = await getUserNameAsync()
    setCurrentUser({ username, pts: 0 })
  }

  useEffect(() => {
    getAuthTokenAsync((token: string) => {
      setIsLogin(() => {
        setLoadingUser(false)
        return !!token
      })
    })
    setUserData()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        currentUser,
        login: () => setIsLogin(true),
        logout: () => setIsLogin(false),
        setCurrentUser,
      }}
    >
      {!loadingUser && (
        <Stack.Navigator headerMode='none'>
          {isLogin ? (
            <Stack.Screen name={Routes.AppStack} component={AppStack} />
          ) : (
            <Stack.Screen name={Routes.AuthStack} component={AuthStack} />
          )}
        </Stack.Navigator>
      )}
    </AuthContext.Provider>
  )
}
