import { StatusBar } from 'expo-status-bar'
import React, { FC, useEffect, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import { SvgLogo } from '../ui/icons/logo'
import styled from 'styled-components'
import { Button } from '../ui/button/button-text'
import { InputText } from '../ui/input/input'
import { theme, normHor, normVert } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { Routes } from '../navigation/routes'
import { RateListItem } from './rate-item'
import { UserRatingList } from '../share/userlist'
import { ButtonIcon } from '../ui/button/button-icon'
import { UserRatingI } from '../share/types'

export const ProfileScreen: FC = () => {
  const navigation = useNavigation()
  const [list, setList] = useState()
  useEffect(() => {
    setList(
      UserRatingList.sort(function (a, b) {
        if (a.pts < b.pts) {
          return 1
        }
        if (a.pts > b.pts) {
          return -1
        }
        return 0
      }),
    )
  }, [UserRatingList])

  const renderItem = ({ item, index }) => (
    <RateListItem item={item} itemNum={index + 1} />
  )

  return (
    <Container>
      <SvgLogo
        width={normHor(340)}
        height={normVert(60)}
        style={styles.container}
      />
      <Banner></Banner>

      <RateList
        data={list}
        renderItem={item => renderItem(item)}
        keyExtractor={item => item.id}
      />
      <View
        style={{ position: 'absolute', top: normVert(665), left: normHor(265) }}
      >
        <ButtonIcon
          variant={'PRIMARY'}
          onPress={() => {
            navigation.navigate(Routes.NewGameScreen)
          }}
        />
      </View>
    </Container>
  )
}

const Container = styled(View)`
  flex: 1;
  position: relative;
  background-color: ${theme('colors.background.0')};
`
const Banner = styled(View)`
  position: absolute;
  width: ${normHor(370)}px;
  height: ${normVert(103)}px;
  align-self: center;
  top: ${normVert(147)}px;
  background-color: ${theme('colors.background.1')};
`
const RateList = styled(FlatList)`
  position: absolute;
  width: ${normHor(370)}px;
  height:${normVert(821 - 300)}
  align-self: center;
  top: ${normVert(270)}px;
  background-color: ${theme('colors.background.0')};
`

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    top: normVert(67),
    left: normHor(36),
    alignItems: 'center',
  },
})
