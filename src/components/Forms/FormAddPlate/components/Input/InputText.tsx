import { Input } from 'antd'
import { InputProps } from '../@types/inputs'
import { input } from '../tailwindcss/variants'
import cls from 'classnames'
import { useFormContext } from 'react-hook-form'
interface inputTextProps extends InputProps {}
export const InputText = ({
    label,
    placeholder,
    id,
    background,
    width,
    name,
}: inputTextProps) => {
    const {
        setValue,
        formState: { errors },
    } = useFormContext() // retrieve all hook methods
    const { base, labelText, inputwa } = input()
    console.log(errors)
    return (
        <p className={base()} style={{ width }}>
            <label className={labelText()} htmlFor={id ? id : ''}>
                {label}
            </label>
            <Input
                onChange={(e) => setValue(name, e.target.value)}
                status={errors[name] ? 'error' : ''}
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
