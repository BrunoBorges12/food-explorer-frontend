'use client'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Space } from 'antd'
import { FormProvider, useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'

export type propsFormLogin = {
    signUp?: boolean
}
type propsFormInput = {
    email: string
    password: string
    name: string
}
export const FormLogin = ({ signUp }: propsFormLogin) => {
    const methods = useForm<propsFormInput>()
    const onSubmit = (data: propsFormInput) => {
        signIn('credentials', { redirect: false, ...data })
    }
    return (
        <FormProvider {...methods}>
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
                        className="w-full pt-5"
                        label="Criar Conta"
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
