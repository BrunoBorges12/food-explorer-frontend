import { Input as InputAntd, InputProps } from 'antd'
import { tv } from 'tailwind-variants'
import { InputPassword } from './Components/InputPassword'
import { propsInput } from './@types/input'
import { PasswordProps } from 'antd/es/input'
import cls from 'classnames'
const input = tv({
    slots: {
        base: '!rounded-lg  font-roboto !text-light-200 !px-[20px] !py-3 item placeholder:!text-light-500 placeholder:!font-roboto ',
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
        <p className="flex flex-col gap-2 justify-center text-base">
            <label className="text-light-400 " htmlFor={props.id}>
                {props.label}
            </label>
            <InputComponent
                {...props}
                className={base({
                    className: cls(
                        props.background ? props.background : '!bg-dark-900', //verifica se tem background caso nao tenha ele usa default dark-900
                        props.className,
                    ),
                })}
            />
        </p>
    )
}
