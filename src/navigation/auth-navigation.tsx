import React, { FC } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Routes } from './routes'
import { AuthScreen } from '../auth/auth-screen'
import { SplashScreen } from '../auth/splash-screen'

const Auth = createStackNavigator()

export const AuthStack: FC = () => (
  <Auth.Navigator headerMode='none' initialRouteName={Routes.AuthScreen}>
    <Auth.Screen name={Routes.AuthScreen} component={AuthScreen} />
    <Auth.Screen name={Routes.SplashScreen} component={SplashScreen} />
  </Auth.Navigator>
)
