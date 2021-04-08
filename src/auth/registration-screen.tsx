import { StatusBar } from 'expo-status-bar'
import React, { FC, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { SvgLogoRotate } from '../ui/icons/logo-rotate'
import styled from 'styled-components'
import { Button } from '../ui/button/button-text'
import { InputText } from '../ui/input/input'
import { theme, normHor, normVert } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { RegistrationI } from '../share/types'
import { Formik, Field } from 'formik'
import * as yup from 'yup'

const signUpSchema = yup.object().shape({
  nickname: yup.string().typeError('Must be a string').required('Required'),
  firstName: yup.string().required('Required'),
  secondName: yup.string().required('Required'),
  password: yup
    .string()
    .min(6, 'Must be at least 6 characters')
    .required('Required'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Required'),
})

export const RegistrationScreen: FC = () => {
  const navigation = useNavigation()
  const initialValues: RegistrationI = {
    nickname: '',
    firstName: '',
    secondName: '',
    password: '',
    passwordConfirm: '',
  }
  const onSubmitAsync = (value: RegistrationI) => {
    alert(JSON.stringify(value))
    navigation.navigate('AuthScreen')
  }

  return (
    <Container>
      <LogoArea>
        <SvgLogoRotate style={styles.container} />
      </LogoArea>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmitAsync}
        validateOnChange
        validateOnBlur
        validationSchema={signUpSchema}
        component={({
          errors,
          values,
          handleBlur,
          handleChange,
          handleSubmit,
          isValid,
          touched,
        }) => (
          <AuthContainer>
            <InputText
              placeholder={'Nickname'}
              onChangeText={handleChange('nickname')}
              onBlur={handleBlur('nickname')}
              value={values.nickname}
              error={touched.nickname && errors.nickname}
            />
            <InputText
              placeholder={'First Name'}
              onChangeText={handleChange('firstName')}
              onBlur={handleBlur('firstName')}
              value={values.firstName}
              error={touched.firstName && errors.firstName}
            />
            <InputText
              placeholder={'Second Name'}
              onChangeText={handleChange('secondName')}
              onBlur={handleBlur('secondName')}
              value={values.secondName}
              error={touched.secondName && errors.secondName}
            />
            <InputText
              placeholder={'Password'}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
              error={touched.secondName && errors.password}
            />
            <InputText
              placeholder={'Password confirm'}
              onChangeText={handleChange('passwordConfirm')}
              onBlur={handleBlur('passwordConfirm')}
              value={values.passwordConfirm}
              error={touched.passwordConfirm && errors.passwordConfirm}
              secureTextEntry
            />
            <View style={{ marginTop: normVert(35) }}>
              <Button
                disabled={!isValid}
                variant={'PRIMARY'}
                text={'Sign up'}
                onPress={handleSubmit}
              />
            </View>
          </AuthContainer>
        )}
      />
      <StatusBar style='auto' />
    </Container>
  )
}

const Container = styled(View)`
  flex: 1;
  position: relative;
  background-color: ${theme('colors.background.0')};
  height: 100%;
`
const AuthContainer = styled(View)`
  margin-top: ${normVert(107)}px;
  margin-left: ${normHor(120)}px;
  margin-right: ${normHor(21)}px;
  align-items: center;
`

const LogoArea = styled(View)`
  position: absolute;
  width: ${normHor(128)}px;
  height: ${normVert(737)}px;
  left: ${normHor(15)}px;
  top: ${normVert(85)}px;
  background-color: ${theme('colors.background.1')};
`

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    top: normVert(166),
    left: normVert(15),
    alignItems: 'flex-start',
  },
})
