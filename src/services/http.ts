import axios, { AxiosInstance } from 'axios'

export default async function htpp(): Promise<AxiosInstance> {
    const baseUrl = process.env.NEXT_PUBLIC_API_LOCAL
    const instance = axios.create({ baseURL: baseUrl })
    return instance
}
