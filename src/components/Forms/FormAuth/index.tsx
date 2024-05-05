'use client'

import { FormLogin } from './FormLogin'
import { FormRegister } from './FormRegister'

type propsFormLogin = {
    mode: 'register' | 'login'
}
export const FormAuth = ({ mode }: propsFormLogin) => {
    return (
        <form className="bg-dark-900 px-14  py-20 flex flex-col max-w-[30rem] w-full  rounded-xl">
            {mode == 'login' ? <FormLogin /> : <FormRegister />}
        </form>
    )
}
