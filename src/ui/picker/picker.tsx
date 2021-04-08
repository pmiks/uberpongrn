import React, { FC, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components'
import { ifProp } from 'styled-tools'
import { theme, normHor, normVert } from '../../theme'
import { SvgEye } from '../icons/eye'
import { Picker } from '@react-native-picker/picker'
import { UserRatingI } from '../../share/types'

type Props = {
  value?: string
  items?: UserRatingI[]
  disabled?: boolean
  name?: string
  error?: string
  errorFieldOff?: boolean
  selectedValue: string
  onValueChange: (value: string) => void
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
const StyledPicker = styled(View)`
    z-index:10;
  height:${normVert(46)}px
  font-size: ${theme('fontSizes.2')}px;
  font-weight: bold;
  color: ${theme('colors.white')};
  
  border: 1px solid ${theme('colors.white')};
  border-radius: 8px;
  padding: 0 0;
  background: ${theme('colors.background.1')};
  &::placeholder {
    color: ${theme('colors.white')};
  } 
  margin-top:${normVert(19)}px
  margin-bottom:${normVert(10)}px  
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

export const PickerField: FC<Props> = ({
  value,
  name,
  error,
  items,
  selectedValue,
  onValueChange,
  ...props
}) => {
  return (
    <Container>
      {name && <StyledText>{name}</StyledText>}
      <StyledPicker>
        <Picker
          style={{
            height: normVert(44),
            zIndex: 10,

            color: theme('colors.white'),
          }}
          mode='modal'
          dropdownIconColor={theme('colors.white')}
          enabled={true}
          selectedValue={selectedValue}
          onValueChange={v => {
            onValueChange(v)
          }}
          //selectedValue={''}
        >
          <Picker.Item
            label={''}
            style={{
              fontSize: theme('fontSizes.2'),
              color: theme('colors.background.2'),
            }}
            value={''}
          ></Picker.Item>
          {items?.map(item => (
            <Picker.Item
              key={item.id}
              label={`${item.firstName} ${item.lastName}`}
              style={{
                fontSize: theme('fontSizes.2'),
                color: theme('colors.background.2'),
              }}
              value={item.id}
            />
          ))}
        </Picker>
      </StyledPicker>
    </Container>
  )
}
