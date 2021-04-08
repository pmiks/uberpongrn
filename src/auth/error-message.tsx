import React, { FC } from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'
import { theme, normVert } from '../theme'
type Props = {
  message: string
}
export const ErrorMessage: FC<Props> = ({ message }) => {
  return (
    <Error>
      <ErrorText>{message}</ErrorText>
    </Error>
  )
}

const ErrorText = styled(Text)`
  color: ${theme('colors.orange')};
  font-weight: bold;
  font-size: ${theme('fontSizes.1')};
`
const Error = styled(View)`
  align-self: center;
  flex-direction: row;
  height: ${normVert(15)}px;
`
