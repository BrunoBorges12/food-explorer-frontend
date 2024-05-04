'use client'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Space, message } from 'antd'
import { FormProvider, useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import {
    RegisterSchema,
    UserSchema,
    propUserInput,
    propsRegisterInput,
} from './schemas/user'
import { zodResolver } from '@hookform/resolvers/zod'
import { register } from './api/register'

export type propsFormLogin = {
    signUp?: boolean
}

export const FormLogin = ({ signUp }: propsFormLogin) => {
    const [messageApi, contextHolder] = message.useMessage()
    const [loading, setLoading] = useState(false)
    const methods = useForm<propUserInput | propsRegisterInput>({
        resolver: zodResolver(signUp ? RegisterSchema : UserSchema),
    })
    const onSubmit = async (data: propUserInput | propsRegisterInput) => {
        setLoading(true)
        if (!signUp) {
            const re = await signIn('credentials', { redirect: false, ...data })

            if (re && re.status === 401) {
                setTimeout(() => {
                    setLoading(false)
                    messageApi.open({
                        type: 'error',
                        content: 'Email ou senha icorreto',
                    })
                }, 1000)
            }
        } else {
            try {
                const isRegister = await register(data as propsRegisterInput)
            } catch {
                setTimeout(() => {
                    setLoading(false)
                    messageApi.open({
                        type: 'error',
                        content:
                            'O usuário com este e-mail já existe no sistema',
                    })
                }, 1000)
            }
        }
    }

    return (
        <FormProvider {...methods}>
            {contextHolder}
            <form className="bg-dark-900 px-14  py-20 flex flex-col max-w-[30rem] w-full  rounded-xl">
                <h1 className="text-light-100  text-3xl text-center font-poppins pb-10 ">
                    {signUp ? '  Crie sua conta' : 'Faça login'}
                </h1>
                <Space size={'large'} direction="vertical">
                    {signUp && (
                        <Input
                            label="Nome"
                            id="name"
                            placeholder="Exemplo: Maria da Silva"
                        />
                    )}
                    <Input
                        label="Email"
                        id="email"
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                    />
                    <Input
                        label="Password"
                        id="password"
                        type="password"
                        placeholder="No mínimo 6 caracteres"
                    />
                </Space>
                <div className="pb-5 pt-7">
                    <Button
                        loading={loading}
                        className="w-full pt-5 capitalize"
                        label={signUp ? 'criar Conta' : 'entra'}
                        onClick={methods.handleSubmit(onSubmit)}
                    />
                </div>
                {signUp && (
                    <a className="text-center text-light-100" href="/login">
                        Ja tenho uma conta
                    </a>
                )}
                {!signUp && (
                    <a className="text-center text-light-100" href="/register">
                        Criar uma conta
                    </a>
                )}
            </form>
        </FormProvider>
    )
}
