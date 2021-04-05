import { StatusBar } from 'expo-status-bar'
import React, { FC, useContext, useEffect, useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { StyleSheet, Text, View, Image } from 'react-native'
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
import { setAuthTokenAsync } from '../share/auth'
import { ErrorMessage } from './error-message'

export const AuthScreen: FC = () => {
  const { login: setIsLogin } = useContext(AuthContext)
  const [loadingLogin, setLoadingLogin] = useState(false)
  const [errorAnswer, setErrorAnswer] = useState('')
  const navigation = useNavigation()
  const initialValues: AuthI = {
    nickname: 'ash_ebs13@mail.ru',
    password: 'ebshop13',
  }

  const signInSchema = yup.object().shape({
    nickname: yup.string().typeError('Must be a string').required('Required'),
    password: yup.string().required('Required'),
  })

  const onSubmitAsync = async (value: AuthI) => {
    try {
      setLoadingLogin(true)
      const response = await login({
        email: value.nickname.trim(),
        password: value.password,
        device: 'a7c95eac-8b90-4898-812a-4f98f32bffbd',
      })

      if (!response.token && !response.devices) {
        //   setStatus(camelCase(response.message))
        setErrorAnswer(response.message)
      }

      if (response.token) {
        navigation.navigate(Routes.SplashScreen)

        response.token && (await setAuthTokenAsync(response.token))
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
              style={{ marginTop: normVert(15) }}
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
      <StatusBar style='auto' />
    </Container>
  )
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
  margin-left: ${normHor(91)}px;
  margin-right: ${normHor(91)}px;
  height: ${normVert(25)}px;
  align-items: center;
  justify-content: space-between;
`

const LogoArea = styled(View)`
  position: relative;
  align-self: stretch;
  margin-top: ${normVert(isIOS ? 56 : 66)};
  height: ${normVert(208)};
  padding-left: ${normHor(18)};
  padding-right: ${normHor(18)};
`
