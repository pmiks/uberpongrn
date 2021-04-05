import React, { FC } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styled, { css } from 'styled-components'
import { theme, normVert, normHor } from '../../theme'
import { ButtonVariant } from '../../enum/button.styles'
import { ifProp, switchProp } from 'styled-tools'
import { SvgNewGame } from '../icons/new-game'

type Props = {
  disabled?: boolean
  onPress?: () => void
  variant?: ButtonVariant
}

const Container = styled(TouchableOpacity)<Props>`
  align-items: center;
  justify-content: center;
  padding: 15px 15px;
  min-width: ${normHor(127)};
  height: ${normVert(47)};
  ${switchProp('variant', {
    [ButtonVariant.OUTLINE]: css``,
    [ButtonVariant.PRIMARY]: css`
      background: ${theme('colors.red')};
      border: 2px solid white;
      border-radius: 2px;
    `,
  })};
  ${ifProp(
    'disabled',
    css`
      background: ${theme('colors.gray')};
    `,
  )}
`

export const ButtonIcon: FC<Props> = ({ ...props }) => {
  return (
    <Container {...props}>
      <SvgNewGame width={97} height={21} />
    </Container>
  )
}
