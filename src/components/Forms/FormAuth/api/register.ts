/* eslint-disable @typescript-eslint/no-explicit-any */
import htpp from '@/services/http'
import { propsRegisterInput } from '../schemas/user'
import { AxiosError, AxiosPromise } from 'axios'
export async function registerUser(
    data: propsRegisterInput,
): Promise<AxiosPromise> {
    try {
        const registerInstance = await htpp()
        const requestData = {
            email: data.email,
            password: data.password,
            full_name: data.name,
        }
        const res = await registerInstance.post('/register', requestData)
        return res
    } catch (e) {
        const { response } = e as AxiosError
        if (response?.data) {
            return response
        }
        return e as any
    }
}
