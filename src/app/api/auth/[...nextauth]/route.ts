import axios from 'axios'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { jwtDecode } from 'jwt-decode'
// Your own logic for dealing with plaintext password strings; be careful!
export const handler = NextAuth({
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'Username',
                    type: 'text',
                    placeholder: 'jsmith',
                },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                const formData = new FormData()
                if (credentials) {
                    formData.append('username', credentials.email)
                    formData.append('password', credentials.password)

                    const res = await axios.post(
                        'http://127.0.0.1:8000/v1/api/login',
                        formData,
                    )
                    const user = res.data
                    return user
                } else {
                    return null
                }
            },
        }),
    ],
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
                session.expires = token.expire as string
            }
            return session
        },
    },
    jwt: {
        maxAge: 8 * 24 * 60 * 60,
    },
    session: {
        strategy: 'jwt',
        maxAge: 8 * 24 * 60 * 60,
    },
})
export { handler as GET, handler as POST }
