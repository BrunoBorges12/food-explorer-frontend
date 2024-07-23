import type { NextAuthOptions } from 'next-auth'
import { jwtDecode, JwtPayload } from 'jwt-decode'
interface JwtDecoteInterface extends JwtPayload {
    subjectAdmin: boolean
}
export const authConfig = {
    jwt: {
        maxAge: 60 * 60 * 24, //1 dia,
    },
    session: {
        strategy: 'jwt',
        maxAge: 60 * 60 * 24, //1 dia,
    },

    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                const decodedJwt = jwtDecode<JwtDecoteInterface>(
                    user.access_token,
                )
                const expire = new Date(
                    decodedJwt.exp ? decodedJwt.exp * 1000 : 0 * 1000,
                )
                return {
                    ...token,
                    jwt: user.access_token,
                    expire,
                    admin: decodedJwt.subjectAdmin,
                }
            }
            return token
        },
        session: async ({ session, token }) => {
            if (token) {
                session.jwt = token.jwt as string

                session.expires = token.expire as Date & string
                session.admin = token.admin as boolean
            }
            return session
        },
    },
    providers: [],
} satisfies NextAuthOptions
