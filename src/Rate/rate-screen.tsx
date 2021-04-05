import { StatusBar } from 'expo-status-bar'
import AsyncStorage from '@react-native-community/async-storage'
import React, { FC, useEffect, useState, useContext } from 'react'
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import styled from 'styled-components'
import { theme, normHor, normVert, isIOS } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { RateListItem } from './rate-item'
import { UserRatingList } from '../share/userlist'
import { UserRatingI } from '../share/types'
import img from '../../assets/img/Logo-2.png'
import { NewGame } from './new-game'
import { TopRateBanner } from './toprate-banner'
import { RateListHeader } from './rate-header'
import { AuthContext } from '../share/context'
import { getAuthTokenAsync, removeAuthTokenAsync, logout } from '../share/auth'

export const RateScreen: FC = () => {
  const navigation = useNavigation()
  const [list, setList] = useState<UserRatingI[]>()
  const { logout: logoutContext } = useContext(AuthContext)
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

  const onPressAsync = async (): Promise<void> => {
    logoutContext()
    const token = await getAuthTokenAsync()
    if (token) {
      await logout(token)
      await removeAuthTokenAsync()
      await AsyncStorage.clear()
    }
  }

  const renderItem = ({ item, index }) => (
    <RateListItem item={item} itemNum={index + 1} />
  )

  return (
    <Container>
      <LogoArea onLongPress={onPressAsync}>
        <Image
          style={{ width: normHor(334), height: normVert(51) }}
          source={img}
          resizeMode={'cover'}
        />
      </LogoArea>
      <TopRateBanner userRate={list ? list[0] : undefined} />
      <NewGame />
      <RateList
        ListHeaderComponent={() => <RateListHeader />}
        data={list}
        renderItem={item => renderItem(item)}
        keyExtractor={item => item.id}
      />
    </Container>
  )
}

const LogoArea = styled(TouchableOpacity)`
  position: relative;
  align-self: stretch;
  margin-top: ${normVert(isIOS ? 25 : 35)};
  height: ${normVert(51)};
  padding-left: ${normHor(10)};
  padding-right: ${normHor(10)};
`
const Container = styled(View)`
  flex: 1;
  position: relative;
  flex-direction: column;
  background-color: ${theme('colors.background.0')};
`
const Banner = styled(View)`
  position: relative;
  width: ${normHor(340)}px;
  height: ${normVert(50)}px;
  align-self: center;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: ${normVert(10)}px;
  background-color: ${theme('colors.background.1')};
  border-radius: 4px;
`
const RateList = styled(FlatList)`
  position: relative;
  width: ${normHor(340)}px;
  flex: 1;
  align-self: center;
  margin-top: ${normVert(10)}px;
  background-color: ${theme('colors.background.1')};
  border-radius: 4px;
`

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    top: normVert(67),
    left: normHor(36),
    alignItems: 'center',
  },
})
