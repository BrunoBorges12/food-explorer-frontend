import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Space } from 'antd'
export type propsFormLogin = {
    signUp?: boolean
}
export const FormLogin = ({ signUp }: propsFormLogin) => {
    return (
        <form
            className="bg-dark-900 px-14  py-20 flex flex-col max-w-[30rem] w-full  rounded-xl"
            action=""
        >
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
                <Button className="w-full pt-5" label="Criar Conta" />
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
    )
}
