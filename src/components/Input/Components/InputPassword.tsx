'use client'
import InputPasswordAntd, { PasswordProps } from 'antd/es/input/Password'

export const InputPassword = (props: PasswordProps) => {
    return (
        <InputPasswordAntd
            classNames={{ input: 'placeholder:!text-light-500' }}
            {...props}
        />
    )
}
