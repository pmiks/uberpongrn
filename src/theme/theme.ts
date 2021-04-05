import get from 'lodash/get'
import { Platform } from 'react-native'
import { normHor, normVert } from './normalize'

export const isIOS = Platform.OS === 'ios'

import { colors } from './colors'
const fontSizes = [10, 12, 14, 15, 16, 17, 18, 19, 20, 25, 30, 35, 50]
export const AppTheme = {
  fontSizes: fontSizes.map(size => normVert(size)),
  lineHeights: [12, 18, 19, 20, 22],

  colors,
}

export const theme = (path: string): any => get(AppTheme, path, null)
