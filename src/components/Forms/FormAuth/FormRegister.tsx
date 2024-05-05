'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { RegisterSchema, propsRegisterInput } from './schemas/user'
import { useState } from 'react'
import { Space, message } from 'antd'
import { Input } from '@/components/Input'
import { Form } from '../Form'
import { register } from './api/register'
import { Button } from '@/components/Button'

export const FormRegister = () => {
    const [loading, setLoading] = useState(false)
    const methods = useForm<propsRegisterInput>({
        resolver: zodResolver(RegisterSchema),
    })

    const [messageApi, contextHolder] = message.useMessage()

    const onSubmit = async (data: propsRegisterInput) => {
        setLoading(true)
        try {
            await register(data)
        } catch {
            setTimeout(() => {
                setLoading(false)
                messageApi.open({
                    type: 'error',
                    content: 'O usuário com este e-mail já existe no sistema',
                })
            }, 1000)
        }
    }
    return (
        <Form methods={methods}>
            {contextHolder}
            <h1 className="text-light-100  text-3xl text-center font-poppins pb-10 ">
                Crie sua conta
            </h1>
            <Space size={'large'} direction="vertical">
                <Input
                    label="Nome"
                    id="name"
                    placeholder="Exemplo: Maria da Silva"
                />

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
                    label={'criar Conta'}
                    onClick={methods.handleSubmit(onSubmit)}
                />
            </div>

            <a className="text-center text-light-100" href="/login">
                Ja tenho uma conta
            </a>
        </Form>
    )
}
