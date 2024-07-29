import { Input } from 'antd'
import { InputProps } from '../@types/inputs'
import { input } from '../tailwindcss/variants'
import cls from 'classnames'
interface inputTextProps extends InputProps {}
export const InputText = ({
    label,
    placeholder,
    id,
    background,
    width,
}: inputTextProps) => {
    const { base, labelText, inputwa } = input()
    return (
        <p className={base()} style={{ width }}>
            <label className={labelText()} htmlFor={id ? id : ''}>
                {label}
            </label>
            <Input
                className={inputwa({
                    className: cls({
                        '!bg-dark-800': background === 'dark-800',
                        '!bg-dark-900': background === 'dark-900',
                    }),
                })}
                id={id ? id : ''}
                placeholder={placeholder ? placeholder : ''}
            />
        </p>
    )
}
