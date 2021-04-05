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
  nickname: string
  firstName: string
  secondName: string
  pts: number
  rang: UberLevel | null
}

export type TLoginInput = {
  email: string
  password: string
  device: string
}

type TLoginResponse = {
  code: number
  token?: string
  error?: string
  message?: string
  type?: string
}
