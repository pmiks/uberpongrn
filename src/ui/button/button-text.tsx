import React, { FC } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styled, { css } from 'styled-components'
import { theme, normVert, normHor } from '../../theme'
import { ButtonVariant } from '../../enum/button.styles'
import { ifProp, switchProp } from 'styled-tools'

type Props = {
  text?: string
  disabled?: boolean
  onPress?: () => void
  variant?: ButtonVariant
}

const Container = styled(TouchableOpacity)<Props>`
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
  min-width: ${normHor(167)};
  height: ${normVert(46)};
  ${switchProp('variant', {
    [ButtonVariant.OUTLINE]: css``,
    [ButtonVariant.PRIMARY]: css`
      background: ${theme('colors.red')};
      border: 0px solid white;
      border-radius: 4px;
    `,
  })};
  ${ifProp(
    'disabled',
    css`
      background: ${theme('colors.gray')};
    `,
  )}
`
const StyledText = styled(Text)<{ variant?: buttonVariant }>`
  color: white;
  ${switchProp('variant', {
    [ButtonVariant.OUTLINE]: css`
      color: ${theme('colors.orange')};
    `,
    [ButtonVariant.PRIMARY]: css`
      color: ${theme('colors.white')};
    `,
  })};
  text-transform: uppercase;
  font-weight: bold;
  font-size: ${theme('fontSizes.2')}px;
`

export const Button: FC<Props> = ({ text, ...props }) => {
  return (
    <Container {...props}>
      <StyledText variant={props.variant}>{text}</StyledText>
    </Container>
  )
}
