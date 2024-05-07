import axios, { AxiosInstance } from 'axios'

export default async function htpp(): Promise<AxiosInstance> {
    const baseUrl = process.env.NEXT_PUBLIC_API_LOCAL
    console.log(baseUrl, process.env.NEXTAUTH_SECRET)
    if (process.env.NEXTAUTH_SECRET) {
    }
    const instance = axios.create({ baseURL: baseUrl })
    return instance
}
