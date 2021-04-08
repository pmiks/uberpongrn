import { UberLevel } from '../enum/uberlevel'

export interface AuthI {
  nickname: string
  password: string
}

export interface RegistrationI {
  nickname: string
  firstName: string
  secondName: string
  password: string
  passwordConfirm?: string
}

export interface UserRatingI {
  id: string
  username: string
  rating: number
  firstName: string
  lastName: string
  isPremium?: boolean
  isBlocked?: boolean
  rang?: UberLevel
}

export type TLoginInput = {
  username: string
  password: string
}

type TLoginResponse = {
  code?: number
  token?: string
  error?: string
  message?: string
  type?: string
}

type TGame = {
  winnerId: string
  loserId: string
}
