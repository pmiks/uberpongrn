import React, { FC } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Routes } from './routes'
import { RateScreen } from '../rate/rate-screen'

const App = createStackNavigator()

export const AppStack: FC = () => (
  <App.Navigator headerMode='none' initialRouteName={Routes.RateScreen}>
    <App.Screen name={Routes.RateScreen} component={RateScreen} />
  </App.Navigator>
)
