import { UserType } from "./user.types"

export type LoginResponseType = {
    accessToken: string
    user: UserType
}

export type AuthResponseType = {
    sessionId: string
    expiracion: string
    user: UserType
}

export type RedisResponseType = {
    value: string
}