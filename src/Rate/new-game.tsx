import { StatusBar } from 'expo-status-bar'
import React, { FC, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { SvgNewGame } from '../ui/icons/new-game'
import styled from 'styled-components'
import { Button } from '../ui/button/button-text'
import { PickerField } from '../ui/picker/picker'
import { theme, normHor, normVert, isIOS } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { Routes } from '../navigation/routes'
import { UserRatingI } from '../share/types'

type Props = {
  items?: UserRatingI[]
  onSubmit?: (winnerId: string, loserId: string) => void
}

export const NewGame: FC<Props> = ({ items, onSubmit }) => {
  const navigation = useNavigation()
  const [winner, setWinner] = useState('')
  const [loser, setLoser] = useState('')

  const onChangeWinner = (val: string) => {
    if (val === loser) setLoser('')
    setWinner(val)
  }
  const onChangeLoser = (val: string) => {
    if (val === winner) setWinner('')
    setLoser(val)
  }

  return (
    <Banner>
      <SvgNewGame
        style={{ alignSelf: 'center' }}
        width={normHor(111)}
        height={normVert(23)}
      />
      <PickerField
        selectedValue={winner}
        onValueChange={onChangeWinner}
        items={items}
        name={'Winner'}
      />
      <PickerField
        selectedValue={loser}
        onValueChange={onChangeLoser}
        items={items}
        name={'Loser'}
      />
      <Button
        disabled={!(winner && loser)}
        variant={'PRIMARY'}
        text={'SUBMIT'}
        onPress={() => {
          onSubmit(winner, loser)
          setWinner('')
          setLoser('')
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
