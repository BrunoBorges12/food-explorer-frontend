import { InputProps } from 'antd'

interface input extends InputProps {
    type?: 'password' | 'text'
}

export type propsInput = input & InputProps
