// Your own logic for dealing with plaintext password strings; be careful!
import axios from 'axios'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { authConfig } from './auth.config'
export const handler = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                email: { label: 'email', type: 'text' },
                password: { label: 'password', type: 'password' },
            },
            async authorize(credentials) {
                const formData = new FormData()
                if (credentials) {
                    formData.append('username', credentials.email as string)
                    formData.append('password', credentials.password as string)

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
})
export { handler as GET, handler as POST }
