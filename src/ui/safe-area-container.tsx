import React, { FC, ReactNode } from 'react'
import { Platform, SafeAreaView, ViewStyle } from 'react-native'
import styled from 'styled-components'
import { theme } from '../theme/theme'

interface Props {
  children: ReactNode
  style?: ViewStyle
}

const SafeArea = styled(SafeAreaView)`
  position: relative;
  flex: 1;
  background-color: ${Platform.OS === 'android'
    ? theme('colors.greys.14')
    : theme('colors.darkWhite')};
  height: 100%;
`

export const SafeAreaContainer: FC<Props> = ({ children, style }) => {
  return <SafeArea style={style}>{children}</SafeArea>
}
