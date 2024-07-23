/* eslint-disable @typescript-eslint/no-unused-vars */
import { JWT, User } from 'next-auth/jwt'
import NextAuth, { DefaultSession } from 'next-auth'

declare module 'next-auth' {
    interface User {
        access_token: string
        admin: boolean
    }
    interface Session {
        jwt: string
        admin: boolean
    }
}
declare module 'next-auth/jwt'
