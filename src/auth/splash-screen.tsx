import React, { FC } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { SvgU } from '../ui/icons/u'
import styled from 'styled-components'
import { theme, normHor, normVert, isIOS } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { Routes } from '../navigation/routes'

export const SplashScreen: FC = () => {
  const navigation = useNavigation()

  const onPress = () => {
    navigation.navigate(Routes.AppStack)
  }

  return (
    <Container onPress={onPress}>
      <SvgU width={normHor(220)} height={normVert(455)} />
    </Container>
  )
}

const Container = styled(TouchableOpacity)`
  flex: 1;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: ${theme('colors.red')};
`

const LogoArea = styled(View)`
  position: relative;
  align-self: stretch;
  margin-top: ${normVert(isIOS ? 56 : 66)};
  height: ${normVert(208)};
  padding-left: ${normHor(18)};
  padding-right: ${normHor(18)};
`
