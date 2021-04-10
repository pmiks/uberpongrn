import { StatusBar } from 'expo-status-bar'
import AsyncStorage from '@react-native-community/async-storage'
import React, { FC, useEffect, useState, useContext, useCallback } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import styled from 'styled-components'
import { theme, normHor, normVert } from '../theme'
import { RateListItem } from './rate-item'
import { UserRatingI } from '../share/types'
import { RateListHeader } from './rate-header'
import { AuthContext } from '../share/context'
import {
  getAuthTokenAsync,
  removeAuthTokenAsync,
  removeUserNameAsync,
  getUsers,
} from '../share/auth'
import { UberLevel } from '../enum/uberlevel'
import { sendGame } from '../share/auth'

export const RateScreen: FC<any> = ({ navigation }) => {
  const [list, setList] = useState<UserRatingI[]>()
  const [refreshList, setRefreshList] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<number>(0)
  const { logout: logoutContext, currentUser, setCurrentUser } = useContext(
    AuthContext,
  )

  const onSubmitGameAsync = async (winnerId: string, loserId: string) => {
    //alert(JSON.stringify({ winner, loser }))
    const response = await sendGame({ winnerId, loserId })
    //alert(JSON.stringify(response))
    if (!response.ok) {
      alert('Fail')
      //alert(JSON.stringify(response))
    } else {
      alert('Submitted')
    }
    await loadDataAsync()
  }

  const onSelectItem = (index: number | undefined) => {
    if (list && index && list[index - 1].username === currentUser.username) {
      return
    }
    list?.forEach(x => {
      if (x.username === currentUser.username) {
        setCurrentUser(user => ({ ...user, pts: x.rating }))
        //setCurrentUser({ ...currentUser, pts: x.rating })
      }
    })
    if (index !== selectedItem) {
      setSelectedItem(index)
    } else {
      setSelectedItem(0)
    }
  }
  const loadDataAsync = async () => {
    setRefreshList(true)
    let URList = await getUsers()
    //setList(URList)
    URList.sort(function (a, b) {
      if (a.rating < b.rating) {
        return 1
      }
      if (a.rating > b.rating) {
        return -1
      }
      return 0
    }),
      URList &&
        setList(
          URList.map((x, i) => {
            if (currentUser.username === x.username) {
              setCurrentUser({ ...currentUser, pts: x.rating })
            }
            if (i == 0) return { ...x, rang: UberLevel.UBERPREDATOR }
            if (i >= 1 && i < 6) return { ...x, rang: UberLevel.FLASHEATING }
            if (i >= 6 && i < 11) return { ...x, rang: UberLevel.GRASSFEEDING }
            if (i >= 11 && i < URList.length - 1)
              return { ...x, rang: UberLevel.VEGETABLE }
            if (i === URList.length - 1)
              return { ...x, rang: UberLevel.UBERVEGETABLE }
          }),
        )
    setRefreshList(false)
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      setSelectedItem(0)
      //await alert('ok')
      await loadDataAsync()
      //await loadDataAsync()
    })
    return unsubscribe
  }, [navigation])

  const onLogoutAsync = async (): Promise<void> => {
    logoutContext()
    const token = await getAuthTokenAsync()
    if (token) {
      await removeAuthTokenAsync()
      await removeUserNameAsync()
      await AsyncStorage.clear()
    }
  }

  const renderItem = ({ item, index }) => (
    <RateListItem
      selected={selectedItem}
      item={item}
      itemNum={index + 1}
      onChange={onSelectItem}
      key={item.id}
    />
  )

  const ListHeaderComponent = useCallback(
    () => (
      <RateListHeader
        list={list}
        onPressLogo={onLogoutAsync}
        onSubmitGame={onSubmitGameAsync}
      />
    ),
    [list, onLogoutAsync, onSubmitGameAsync],
  )

  return (
    <Container>
      <RateList
        ListHeaderComponent={ListHeaderComponent}
        onRefresh={loadDataAsync}
        refreshing={refreshList}
        data={list}
        renderItem={item => renderItem(item)}
        keyExtractor={item => item.id}
      />
    </Container>
  )
}

const Container = styled(View)`
  flex: 1;
  position: relative;
  flex-direction: column;
  background-color: ${theme('colors.background.0')};
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
