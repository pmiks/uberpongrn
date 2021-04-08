import { StatusBar } from 'expo-status-bar'
import React, { FC, useState, useContext } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import { SvgLogo } from '../ui/icons/logo'
import styled, { css } from 'styled-components'
import { switchProp } from 'styled-tools'
import { Button } from '../ui/button/button-text'
import { InputText } from '../ui/input/input'
import { theme, normHor, normVert } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { UserRatingI } from '../share/types'
import { UberLevel } from '../enum/uberlevel'
import { AuthContext } from '../share/context'

type Props = {
  item?: UserRatingI
  itemNum?: number
  selected?: number
  onChange: (n: number | undefined) => void
}

export const RateListItem: FC<Props> = ({
  item,
  itemNum,
  selected,
  onChange,
}) => {
  let [ratingForecast, setRatingForecast] = useState({
    winning: 0,
    losing: 0,
  })
  const { currentUser } = useContext(AuthContext)
  var EloRating = require('elo-rating')
  const calculateRating = (me, opponentRating) => {
    onChange(itemNum)
    setRatingForecast({
      winning: EloRating.calculate(me, opponentRating, true, 100).playerRating,
      losing: EloRating.calculate(me, opponentRating, false, 100).playerRating,
    })
  }
  return (
    <View>
      <Container
        onPress={() => {
          //       onChange(itemNum)
          calculateRating(currentUser.pts, item?.rating)
        }}
      >
        <ColumnOne>
          <CellOrder>{itemNum}</CellOrder>
          <CellOrder />
        </ColumnOne>
        <ColumnTwo>
          <Cell numberOfLines={1}>
            {item?.firstName} {item?.lastName}
          </Cell>
          <CellColor numberOfLines={1} variant={item?.rang}>
            {item?.rang}
          </CellColor>
        </ColumnTwo>
        <ColumnThree>
          <Cell numberOfLines={1}>{item?.username}</Cell>
          <CellColor numberOfLines={1} variant={item?.rang}>
            {item?.rating}
          </CellColor>
        </ColumnThree>
        {selected === itemNum && (
          <ColumnFour>
            <CellForecast numberOfLines={1}>
              Winning {ratingForecast.winning}
            </CellForecast>
            <CellForecast numberOfLines={1}>
              Losing {ratingForecast.losing}
            </CellForecast>
          </ColumnFour>
        )}
      </Container>
    </View>
  )
}

const Container = styled(TouchableOpacity)`
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
  justify-content: space-around;
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
const ColumnFour = styled(View)`
  position: relative;
  align-self: stretch;
  justify-content: space-around;
  align-items: center;
  padding: ${normVert(2)}px ${normHor(2)}px;
  margin: ${normVert(5)}px ${normHor(5)}px;
  background-color: ${theme('colors.white')};
  flex: 0.4;
  border-radius: 8px;
`
const CellOrder = styled(Text)`
  align-self: center;
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
  overflow: hidden;
`
const Cell = styled(Text)`
  font-weight: 400;
  font-size: ${theme('fontSizes.2')}px;
  text-align: left;
  color: ${theme('colors.white')};
  overflow: hidden;
`
const CellForecast = styled(Text)`
  font-weight: 400;
  font-size: ${theme('fontSizes.1')}px;
  text-align: left;
  color: ${theme('colors.background.1')};
  overflow: hidden;
`
