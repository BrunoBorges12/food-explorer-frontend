import axios from 'axios'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
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
})
export { handler as GET, handler as POST }
