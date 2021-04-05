import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('window')
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width]

const guidelineBaseWidth = Platform.select({
  ios: 360,
  android: 360,
  default: 375,
})

const guidelineBaseHeight = Platform.select({
  ios: 640,
  android: 640,
  default: 812,
})

export const normHor = (size: number): number =>
  (shortDimension / guidelineBaseWidth) * size
export const normVert = (size: number): number =>
  (longDimension / guidelineBaseHeight) * size
