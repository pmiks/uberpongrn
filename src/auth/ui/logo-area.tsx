import React, { FC } from 'react'
import { Image, View } from 'react-native'
import img from '../../../assets/img/Logo-1.png'
import styled from 'styled-components'
import { normVert, normHor, theme } from '../../theme'

export const LogoArea: FC = () => {
  return (
    <Container>
      <Image
        style={{ width: normHor(352), height: normVert(208) }}
        source={img}
        resizeMode={'contain'}
      />
    </Container>
  )
}

const Container = styled(View)`
  position: relative;
  align-self: stretch;
  margin-top: ${normVert(36)};
  height: ${normVert(208)};
  width: ${normHor(352)};
  margin-left: ${normHor(0)};
  margin-right: ${normHor(0)};
`
