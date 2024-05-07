'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserSchema } from './schemas/user'
import { propsInput } from '@/components/Input/@types/input'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { Space, message } from 'antd'
import { Input } from '@/components/Input'
import { Form } from '../Form'
import { Button } from '@/components/Button'
import { useRouter } from 'next/navigation'

export const FormLogin = () => {
    const [loading, setLoading] = useState(false)
    const methods = useForm<propsInput>({
        resolver: zodResolver(UserSchema),
    })
    const router = useRouter()
    const [messageApi, contextHolder] = message.useMessage()

    const onSubmit = async (data: propsInput) => {
        setLoading(true)
        const re = await signIn('credentials', { redirect: false, ...data })

        if (re && re.status === 401) {
            setTimeout(() => {
                setLoading(false)
                messageApi.open({
                    type: 'error',
                    content: 'Email ou senha icorreto',
                })
            }, 1000)
        } else {
            router.push('/')
        }
    }
    return (
        <Form methods={methods}>
            {contextHolder}
            <h1 className="text-light-100  text-3xl text-center font-poppins pb-10 ">
                Faça login
            </h1>
            <Space size={'large'} direction="vertical">
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
                    label={'entra'}
                    onClick={methods.handleSubmit(onSubmit)}
                />
            </div>

            <a className="text-center text-light-100" href="/register">
                Criar uma conta
            </a>
        </Form>
    )
}
