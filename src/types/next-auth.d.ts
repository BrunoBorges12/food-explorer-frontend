/* eslint-disable @typescript-eslint/no-unused-vars */
import { JWT, User } from 'next-auth/jwt'
import NextAuth, { DefaultSession } from 'next-auth'

declare module 'next-auth' {
    interface User {
        access_token: string
    }
    interface Session {
        jwt: string
    }
}
declare module 'next-auth/jwt'
