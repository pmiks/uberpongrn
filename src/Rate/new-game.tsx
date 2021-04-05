import { StatusBar } from 'expo-status-bar'
import React, { FC, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { SvgLogo } from '../ui/icons/logo'
import { SvgNewGame } from '../ui/icons/new-game'
import styled from 'styled-components'
import { Button } from '../ui/button/button-text'
import { InputText } from '../ui/input/input'
import { theme, normHor, normVert, isIOS } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { Routes } from '../navigation/routes'

export const NewGame: FC = () => {
  const navigation = useNavigation()

  return (
    <Banner>
      <SvgNewGame
        style={{ alignSelf: 'center' }}
        width={normHor(111)}
        height={normVert(23)}
      />
      <InputText errorFieldOff placeholder={'Winner'} />
      <InputText errorFieldOff placeholder={'Loser'} />
      <Button
        disabled={false}
        variant={'PRIMARY'}
        text={'SUBMIT'}
        onPress={() => {
          alert('Submitted')
          navigation.navigate(Routes.AppStack)
        }}
      />
    </Banner>
  )
}

const Container = styled(View)`
  flex: 1;
  position: relative;
  flex-direction: column;

  background-color: ${theme('colors.background.0')};
`
const Banner = styled(View)`
  position: relative;
  width: ${normHor(340)}px;
  height: ${normVert(249)}px;
  align-self: center;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  margin-top: ${normVert(10)}px;
  background-color: ${theme('colors.background.1')};
  padding: ${normVert(10)}px ${normHor(10)}px;
  border-radius: 4px;
`
const NameHeader = styled(Text)`
  position: relative;
  color: ${theme('colors.white')};
  font-weight: bold;
  font-size: ${theme('fontSizes.6')}px;
`

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    top: normVert(67),
    left: normHor(36),
    alignItems: 'center',
  },
})
