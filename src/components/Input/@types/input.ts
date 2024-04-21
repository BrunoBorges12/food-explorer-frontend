import { InputProps } from 'antd'

interface input extends InputProps {
    type?: 'password' | 'text'
    background?: string
    label: string
}

export type propsInput = input & InputProps
