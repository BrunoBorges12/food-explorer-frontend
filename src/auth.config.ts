import type { NextAuthOptions } from 'next-auth'
import { jwtDecode } from 'jwt-decode'
export const authConfig = {
    jwt: {
        maxAge: 60 * 60 * 24, //1 dia,
    },
    session: {
        strategy: 'jwt',
        maxAge: 60 * 60 * 24, //1 dia,
    },
    pages: {
        signIn: '/login',
        newUser: '/register',
    },

    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                const decodedJwt = jwtDecode(user.access_token)
                const expire = new Date(
                    decodedJwt.exp ? decodedJwt.exp * 1000 : 0 * 1000,
                )
                return {
                    ...token,
                    jwt: user.access_token,
                    expire,
                }
            }
            return token
        },
        session: async ({ session, token }) => {
            if (token) {
                session.jwt = token.jwt as string
                session.expires = token.expire as Date & string
            }
            return session
        },
        async redirect({ url, baseUrl }) {
            // Allows relative callback URLs
            if (url.startsWith('/')) return `${baseUrl}${url}`
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) return url
            return baseUrl
        },
    },
    providers: [],
} satisfies NextAuthOptions
