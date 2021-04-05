import { StatusBar } from 'expo-status-bar'
import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { RootNavigator } from './navigation/root'

export const App: FC = () => {
  return (
    <>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </>
  )
}
