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
export const GameItem: FC<Props> = ({ item, itemNum }) => {
  const navigation = useNavigation()

  return (
    <Container>
      <ColumnOne>
        <CellOrder>{itemNum}</CellOrder>
      </ColumnOne>
      <ColumnTwo>
        <CellNick>{item?.nickname}</CellNick>
        <CellName>
          {item?.firstName} {item?.secondName}
        </CellName>
      </ColumnTwo>
      <ColumnThree>
        <CellPts variant={item?.rang}>{item?.pts}</CellPts>
        <CellRang fontSize={`${theme('fontSizes.10')}px`} variant={item?.rang}>
          {item?.rang}
        </CellRang>
      </ColumnThree>
    </Container>
  )
}

const Container = styled(View)`
  flex-direction: row;
  padding: 25px 5px
  position: relative;
  width: ${normHor(370)}px;
  height: ${normVert(103)}px;
  align-self: stretch;
  justify-content: space-around;
  background-color: ${theme('colors.background.1')};
  border: 0 solid white;
  border-bottom-width:2px;
  
`
const ColumnOne = styled(View)`
  position: relative;
  align-self: center;
  text-align: center;
  flex: 0.1;
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
const CellOrder = styled(Text)`
  text-align: center;
  font-size: ${theme('fontSizes.10')}px;
  font-weight: bold;
  color: ${theme('colors.white')};
`
const CellPts = styled(Text)`
  font-size: ${theme('fontSizes.9')}px;
  font-weight: bold;
  color: ${theme('colors.yellow')};
  text-align: right;
  color: ${theme('colors.white')};
  ${switchProp('variant', {
    [UberLevel.UBERPREDATOR]: css`
      color: ${theme('colors.red')};
    `,
    [UberLevel.FLASHEATING]: css`
      color: ${theme('colors.orange')};
    `,
    [UberLevel.GRASSFEEDING]: css`
      color: ${theme('colors.yellow')};
    `,
    [UberLevel.VEGETABLE]: css`
      color: ${theme('colors.green.0')};
    `,
    [UberLevel.UBERVEGETABLE]: css`
      color: ${theme('colors.green.1')};
    `,
  })};
`
const CellRang = styled(Text)`
  font-weight: bold;
  text-align: right;
  font-size: ${theme('fontSizes.3')}px;
  ${switchProp('variant', {
    [UberLevel.UBERPREDATOR]: css`
      color: ${theme('colors.red')};
    `,
    [UberLevel.FLASHEATING]: css`
      color: ${theme('colors.orange')};
    `,
    [UberLevel.GRASSFEEDING]: css`
      color: ${theme('colors.yellow')};
    `,
    [UberLevel.VEGETABLE]: css`
      color: ${theme('colors.green.0')};
    `,
    [UberLevel.UBERVEGETABLE]: css`
      color: ${theme('colors.green.1')};
    `,
    default: css`
      color: ${theme('colors.white')};
    `,
  })};
`
const CellNick = styled(Text)`
  font-weight: bold;
  font-size: ${theme('fontSizes.9')}px;
  text-align: left;
  color: ${theme('colors.white')};
`
const CellName = styled(Text)`
  font-weight: bold;
  text-align: left;
  font-size: ${theme('fontSizes.6')}px;
  color: ${theme('colors.white')};
`
