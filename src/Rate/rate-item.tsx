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
export const RateListItem: FC<Props> = ({ item, itemNum }) => {
  const navigation = useNavigation()

  return (
    <Container>
      <ColumnOne>
        <CellOrder>{itemNum}</CellOrder>
      </ColumnOne>
      <ColumnTwo>
        <Cell>
          {item?.firstName} {item?.secondName}
        </Cell>
        <CellColor variant={item?.rang}>{item?.rang}</CellColor>
      </ColumnTwo>
      <ColumnThree>
        <Cell>{item?.nickname}</Cell>
        <CellColor variant={item?.rang}>{item?.pts}</CellColor>
      </ColumnThree>
    </Container>
  )
}

const Container = styled(View)`
  flex-direction: row;
  padding: 5px 0px
  position: relative;  
  height: ${normVert(45)}px;
  align-self: stretch;
  justify-content: space-around;
  
  border: 0 solid  ${theme('colors.border')};
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
const CellOrder = styled(Text)`
  text-align: center;
  font-size: ${theme('fontSizes.2')}px;
  font-weight: 400;
  color: ${theme('colors.white')};
`
const CellColor = styled(Text)`
  font-size: ${theme('fontSizes.2')}px;
  font-weight: 400;
  color: ${theme('colors.yellow')};
  text-align: left;
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
const Cell = styled(Text)`
  font-weight: 400;
  font-size: ${theme('fontSizes.2')}px;
  text-align: left;
  color: ${theme('colors.white')};
`
