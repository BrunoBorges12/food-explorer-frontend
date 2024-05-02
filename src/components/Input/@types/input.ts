import { InputProps } from 'antd'

interface CustomInputProps extends InputProps {
    type?: 'password' | 'text'
    background?: string
    label: string
}

export type propsInput = CustomInputProps & InputProps
