import React, { FC } from 'react'
import { Text, View, Image, FlatList } from 'react-native'
import { SvgUberPredator } from '../ui/icons/uber-predator'
import styled from 'styled-components'
import { theme, normHor, normVert, isIOS } from '../theme'
import { UserRatingI } from '../share/types'

interface Props {
  userRate: UserRatingI | undefined
}
export const TopRateBanner: FC<Props> = ({ userRate }) => {
  return (
    <Banner>
      {userRate && (
        <>
          <Row>
            <TextWhite>{userRate.firstName.toUpperCase()}</TextWhite>
            <TextRed> {userRate.nickname.toUpperCase()} </TextRed>
            <TextWhite>{userRate.secondName.toUpperCase()}</TextWhite>
          </Row>
          <Row>
            <TextRed>{userRate.pts} pts</TextRed>
          </Row>
        </>
      )}
      <SvgUberPredator
        width={normHor(188)}
        height={normVert(50)}
        style={{
          position: 'absolute',
          bottom: -5,
          right: 0,
        }}
      />
    </Banner>
  )
}

const Row = styled(View)`
  height: ${normVert(24)}px;
  position: relative;
  flex-direction: row;
  align-self: flex-start;
  align-items: center;
  justify-content: flex-start;
  width: ${normHor(340)}px;
  margin-left: ${normHor(20)}px;
`
const TextWhite = styled(Text)`
  color: ${theme('colors.white')};
  font-weight: 700;
  font-size: ${theme('fontSizes.2')};
`
const TextRed = styled(Text)`
  color: ${theme('colors.red')};
  font-weight: 700;
  font-size: ${theme('fontSizes.2')};
`

const Banner = styled(View)`
  position: relative;
  width: ${normHor(340)}px;
  height: ${normVert(50)}px;
  align-self: center;
  align-items: flex-end;

  margin-top: ${normVert(10)}px;
  background-color: ${theme('colors.background.1')};
  border-radius: 4px;
`
