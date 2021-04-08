import { StatusBar } from 'expo-status-bar'
import React, { FC, useContext, useEffect, useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { Text, View, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SvgLock } from '../ui/icons/lock'
import styled from 'styled-components'
import { Button } from '../ui/button/button-text'
import { InputText } from '../ui/input/input'
import { theme, normHor, normVert, isIOS } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { Routes } from '../navigation/routes'
import { AuthI } from '../share/types'
import img from '../../assets/img/Logo-1.png'
import { AuthContext } from '../share/context'
import { login } from '../share/auth'
import { setAuthTokenAsync, setUserNameAsync } from '../share/auth'
import { ErrorMessage } from './error-message'
import { SafeAreaContainer } from '../ui/safe-area-container'

export const AuthScreen: FC = () => {
  const { login: setIsLogin, setCurrentUser } = useContext(AuthContext)
  const [loadingLogin, setLoadingLogin] = useState(false)
  const [errorAnswer, setErrorAnswer] = useState('')
  const navigation = useNavigation()
  const initialValues: AuthI = {
    nickname: '',
    password: '',
  }

  const signInSchema = yup.object().shape({
    nickname: yup.string().typeError('Must be a string').required('Required'),
    password: yup.string().required('Required'),
  })

  const onSubmitAsync = async (value: AuthI) => {
    try {
      setLoadingLogin(true)
      const response = await login({
        username: value.nickname,
        password: value.password,
      })

      if (!response.token) {
        //   setStatus(camelCase(response.message))
        setErrorAnswer(response.message)
      }
      //alert(JSON.stringify(value) + ' ' + JSON.stringify(response))
      if (response.token) {
        navigation.navigate(Routes.SplashScreen)

        response.token && (await setAuthTokenAsync(response.token))
        await setUserNameAsync(value.nickname)
        setCurrentUser({ username: value.nickname, pts: 0 })
        setLoadingLogin(false)
        setTimeout(async () => {
          setIsLogin()
        }, 1500)
      }
    } catch (error) {
      setErrorAnswer(error.message)
      //      setStatus(camelCase(error.message))
    } finally {
      setLoadingLogin(false)
    }

    //    navigation.navigate(Routes.SplashScreen)
    //    setTimeout(() => setIsLogin(), 3000)
  }

  return (
    <SafeAreaContainer>
      <KeyboardAwareScrollView
        bounces={false}
        extraScrollHeight={10}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={contentContainerStyle}
        keyboardShouldPersistTaps='always'
      >
        <Container>
          <LogoArea>
            <Image
              style={{ width: normHor(324), height: normVert(208) }}
              source={img}
              resizeMode={'contain'}
            />
          </LogoArea>

          <Formik
            initialValues={initialValues}
            onSubmit={onSubmitAsync}
            validateOnChange
            validateOnBlur
            validationSchema={signInSchema}
            component={({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <AuthContainer>
                <InputText
                  placeholder={'Nickname'}
                  value={values.nickname}
                  onChangeText={handleChange('nickname')}
                  onBlur={handleBlur('nickname')}
                  error={touched.nickname && errors.nickname}
                />
                <InputText
                  placeholder={'Password'}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  error={touched.password && errors.password}
                  secureTextEntry
                />
                <ErrorMessage message={errorAnswer} />
                <Button
                  style={{ marginTop: normVert(25) }}
                  disabled={!isValid}
                  variant={'PRIMARY'}
                  text={'Sign In'}
                  onPress={handleSubmit}
                />
              </AuthContainer>
            )}
          />

          <FootContainer>
            <SvgLock />
            <Text
              style={{
                fontSize: theme('fontSizes.2'),
                color: theme('colors.white'),
                marginLeft: normHor(8),
              }}
            >
              Your data is encrypted
            </Text>
          </FootContainer>
          <StatusBar hidden />
        </Container>
      </KeyboardAwareScrollView>
    </SafeAreaContainer>
  )
}
const contentContainerStyle = {
  flexGrow: 1,
}
const Container = styled(View)`
  flex: 1;
  position: relative;
  background-color: ${theme('colors.background.1')};
`
const AuthContainer = styled(View)`
  margin-top: ${normVert(50)}px;
  margin-left: ${normHor(30)}px;
  margin-right: ${normHor(30)}px;
  align-items: stretch;
`
const FootContainer = styled(View)`
  position: relative;
  flex-direction: row;
  margin-top: ${normVert(32)}px;
  height: ${normVert(25)}px;
  align-items: center;
  align-self: center;
  justify-content: space-between;
`

const LogoArea = styled(View)`
  position: relative;
  align-self: stretch;
  margin-top: ${normVert(36)};
  height: ${normVert(208)};
  padding-left: ${normHor(18)};
  padding-right: ${normHor(18)};
`
