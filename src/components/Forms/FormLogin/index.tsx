import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Space } from 'antd'

export const FormLogin = () => {
    return (
        <form
            className="bg-dark-900 p-14  flex flex-col max-w-[30rem] h-[35rem] w-full  rounded-xl"
            action=""
        >
            <h1 className="text-light-100  text-3xl text-center font-poppins pb-14 ">
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
            <div className="py-5">
                <Button className="w-full pt-5" label="Criar Conta" />
            </div>
            <a className="text-center text-light-100" href="">
                Ja tenho uma conta
            </a>
        </form>
    )
}
