import { Input as InputAntd, InputProps } from 'antd'
import { tv } from 'tailwind-variants'
import { InputPassword } from './Components/InputPassword'
import { propsInput } from './@types/input'
import { PasswordProps } from 'antd/es/input'
const input = tv({
    slots: {
        base: '!rounded-lg !bg-dark-900 font-roboto !text-light-200 !px-[20px] !py-3 item placeholder:!text-light-500 placeholder:!font-roboto',
    },
})
const { base } = input()

type InputTypeMap = {
    [key: string]: React.ComponentType<InputProps | PasswordProps>
}
const InputTypeMap: InputTypeMap = {
    password: InputPassword,
    text: InputAntd,
}

export const Input = (props: propsInput) => {
    const InputComponent =
        InputTypeMap[props.type ? props.type : ''] || InputAntd
    return (
        <div className="w-full h-full flex flex-col py-36 justify-center items-center">
            <div className="flex flex-col  justify-center   ">
                <InputComponent {...props} className={base()} />
            </div>
        </div>
    )
}
