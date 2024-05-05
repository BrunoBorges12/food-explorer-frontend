import axios from 'axios'
import { propsRegisterInput } from '../schemas/user'
export async function register(data: propsRegisterInput) {
    const requestData = {
        email: data.email,
        password: data.password,
        full_name: data.name,
    }

    const res = await axios.post(
        'http://127.0.0.1:8000/v1/api/register',
        requestData,
    )
    return res.data
}
