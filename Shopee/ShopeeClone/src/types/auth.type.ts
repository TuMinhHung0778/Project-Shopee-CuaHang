import type { User } from './user.type'
import type { SuccesResponse } from './utils.type'

export type AuthResponse = SuccesResponse<{
  access_token: string
  expires: string
  user: User
}>
