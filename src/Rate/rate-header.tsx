import { StatusBar } from 'expo-status-bar'
import React, { FC, useState } from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  View,
  SafeAreaView,
} from 'react-native'
import { SvgLogo } from '../ui/icons/logo'
import styled, { css } from 'styled-components'
import { theme, normHor, normVert, isIOS } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { UserRatingI } from '../share/types'
import { UberLevel } from '../enum/uberlevel'
import { NewGame } from './new-game'
import { TopRateBanner } from './toprate-banner'
import img from '../../assets/img/Logo-2.png'

type Props = {
  onPressLogo?: () => void
  onSubmitGame?: (winnerId: string, loserId: string) => void
  list?: UserRatingI[]
}
export const RateListHeader: FC<Props> = ({
  list,
  onPressLogo,
  onSubmitGame,
}) => {
  return (
    <Container>
      <LogoArea onLongPress={onPressLogo}>
        <Image
          style={{ width: normHor(334), height: normVert(51) }}
          source={img}
          resizeMode={'cover'}
        />
      </LogoArea>

      <TopRateBanner userRate={list ? list[0] : undefined} />
      <NewGame items={list} onSubmit={onSubmitGame} />
      <Header>
        <ColumnOne>
          <Cell>PLACE</Cell>
        </ColumnOne>
        <ColumnTwo>
          <Cell>NAME</Cell>
        </ColumnTwo>
        <ColumnThree>
          <Cell>NICKNAME</Cell>
        </ColumnThree>
      </Header>
    </Container>
  )
}

const LogoArea = styled(TouchableOpacity)`
  position: relative;
  align-self: stretch;
  margin-top: ${normVert(5)};
  height: ${normVert(40)};
`

const Header = styled(View)`
  flex-direction: row;
  padding: 5px 5px
  position: relative;  
  height: ${normVert(34)}px;
  align-self: stretch;
  justify-content: space-around;
  margin-top: ${normVert(10)};
  border: 0 solid ${theme('colors.border')};
  background-color: ${theme('colors.background.1')};
  border-bottom-width:1px;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  
`
const ColumnOne = styled(View)`
  position: relative;
  align-self: center;
  text-align: center;
  flex: 0.2;
`
const ColumnTwo = styled(View)`
  position: relative;
  align-self: stretch;
  justify-content: space-around;
  flex: 0.5;
`
const ColumnThree = styled(View)`
  position: relative;
  align-self: stretch;
  justify-content: space-around;
  flex: 0.4;
`
const Cell = styled(Text)`
  font-weight: 400;
  font-size: ${theme('fontSizes.1')}px;
  text-align: left;
  color: ${theme('colors.white')};
`
const Container = styled(View)`
  position: relative;
  flex-direction: column;
  background-color: ${theme('colors.background.0')};
`
