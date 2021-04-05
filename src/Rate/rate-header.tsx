import { StatusBar } from 'expo-status-bar'
import React, { FC, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { SvgLogo } from '../ui/icons/logo'
import styled, { css } from 'styled-components'
import { switchProp } from 'styled-tools'
import { Button } from '../ui/button/button-text'
import { InputText } from '../ui/input/input'
import { theme, normHor, normVert } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { UserRatingI } from '../share/types'
import { UberLevel } from '../enum/uberlevel'

type Props = {
  item?: UserRatingI
  itemNum?: number
}
export const RateListHeader: FC<Props> = ({ item, itemNum }) => {
  const navigation = useNavigation()

  return (
    <Container>
      <ColumnOne>
        <Cell>PLACE</Cell>
      </ColumnOne>
      <ColumnTwo>
        <Cell>NAME</Cell>
      </ColumnTwo>
      <ColumnThree>
        <Cell>NICKNAME</Cell>
      </ColumnThree>
    </Container>
  )
}

const Container = styled(View)`
  flex-direction: row;
  padding: 5px 5px
  position: relative;  
  height: ${normVert(34)}px;
  align-self: stretch;
  justify-content: space-around;
  border: 0 solid ${theme('colors.border')};
  border-bottom-width:1px;
  
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
