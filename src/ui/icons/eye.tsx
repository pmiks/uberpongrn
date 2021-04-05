import React, { FC } from 'react'
import { View, ViewStyle } from 'react-native'
import Svg, { Path } from 'react-native-svg'

interface Props {
  style?: ViewStyle
  color?: string
  opacity?: number
  width?: number
  height?: number
}

export const SvgEye: FC<Props> = ({
  style,
  color,
  width = '25',
  height = '15',
  opacity,
}) => (
  <View pointerEvents='none' style={{ ...style, opacity }}>
    <Svg width={width} height={height} viewBox='0 0 25 15' fill='none'>
      <Path
        d='M12.4667 0C6.8 0 1.96067 3.11 0 7.5C1.96067 11.89 6.8 15 12.4667 15C18.1333 15 22.9727 11.89 24.9333 7.5C22.9727 3.11 18.1333 0 12.4667 0ZM12.4667 12.5C9.33866 12.5 6.8 10.26 6.8 7.5C6.8 4.74 9.33866 2.5 12.4667 2.5C15.5947 2.5 18.1333 4.74 18.1333 7.5C18.1333 10.26 15.5947 12.5 12.4667 12.5ZM12.4667 4.5C10.5853 4.5 9.06666 5.84 9.06666 7.5C9.06666 9.16 10.5853 10.5 12.4667 10.5C14.348 10.5 15.8667 9.16 15.8667 7.5C15.8667 5.84 14.348 4.5 12.4667 4.5Z'
        fill={color || 'white'}
      />
    </Svg>
  </View>
)
