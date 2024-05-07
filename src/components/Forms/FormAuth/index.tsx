'use client'

import { FormLogin } from './FormLogin'
import { FormRegister } from './FormRegister'

type propsFormLogin = {
    mode: 'register' | 'login'
}
export const FormAuth = ({ mode }: propsFormLogin) => {
    return (
        <form className=" px-14  flex flex-col max-w-[30rem] w-full  rounded-xl  lg:py-20 lg:bg-dark-900">
            {mode == 'login' ? <FormLogin /> : <FormRegister />}
        </form>
    )
}
