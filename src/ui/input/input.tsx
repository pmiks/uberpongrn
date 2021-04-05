import React, { FC, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components'
import { ifProp } from 'styled-tools'
import { theme, normHor, normVert } from '../../theme'
import { SvgEye } from '../icons/eye'

type Props = {
  value?: string
  disabled?: boolean
  placeholder?: string
  name?: string
  error?: string
  errorFieldOff?: boolean
  secureTextEntry?: boolean
}

const Container = styled(View)<Props>`
  width: 100%;
`
const StyledText = styled(Text)`
  z-index: 1;
  position: absolute;
  margin-top: 0;
  margin-left: ${normHor(2)}px;
  color: ${theme('colors.white')};
  font-size: ${theme('fontSizes.1')}px;
`
const StyledTextInput = styled(TextInput)`
  height:${normVert(46)}px
  font-size: ${theme('fontSizes.2')}px;
  font-weight: bold;
  color: ${theme('colors.white')};
  align-items: center;
  justify-content: center;
  border: 2px solid ${theme('colors.white')};
  border-radius: 8px;
  padding: ${normVert(15)}px ${normHor(10)}px;
  background: ${theme('colors.background.1')};
  &::placeholder {
    color: ${theme('colors.white')};
  } 
  margin-top:${normVert(19)}px
  margin-bottom:${normVert(20)}px
  ${ifProp(
    'errorFieldOff',
    css`
      margin-bottom: ${normVert(10)}px;
    `,
  )}
  
`
const ErrorText = styled(Text)`
  z-index: 1;
  position: absolute;
  top: ${normHor(70)}px;
  left: ${normHor(25)}px;
  color: ${theme('colors.orange')};
  font-weight: bold;
  font-size: ${theme('fontSizes.0')}px;
`

const Eye = styled(TouchableOpacity)`
  z-index: 1;
  position: absolute;
  top: ${normVert(35)};
  right: ${normHor(12)};
`

export const InputText: FC<Props> = ({
  value,
  placeholder,
  error,
  errorFieldOff = false,
  secureTextEntry,
  ...props
}) => {
  const [secureText, setSecureText] = useState(secureTextEntry)
  return (
    <Container>
      {value?.length > 0 && <StyledText>{placeholder}</StyledText>}
      <StyledTextInput
        {...props}
        value={value}
        errorFieldOff={errorFieldOff}
        placeholder={placeholder}
        secureTextEntry={secureText}
        placeholderTextColor={theme('colors.gray')}
      />
      {error && <ErrorText>{error}</ErrorText>}
      {secureTextEntry && (
        <Eye onPress={() => setSecureText(!secureText)}>
          <SvgEye width={normHor(25)} height={normVert(15)} />
        </Eye>
      )}
    </Container>
  )
}
