'use client'
import { InputNumber as InputNumberAntd } from 'antd'
import { InputProps } from '../@types/inputs'
import { input } from '../tailwindcss/variants'
import cls from 'classnames'

interface inputTextProps extends InputProps {}

export const InputNumber = ({
    label,
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
            <InputNumberAntd
                formatter={(value) =>
                    `R$ ${value}`
                        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                        .replace(/(\d+)(\.\d{2})$/, '$1,$2')
                }
                parser={(value) =>
                    value
                        ?.replace(/R\$\s?|(\.*)/g, '')
                        .replace(',', '.') as unknown as number
                }
                className={inputwa({
                    className: cls(
                        {
                            '!bg-dark-800': background === 'dark-800',
                            '!bg-dark-900': background === 'dark-900',
                        },
                        '!w-full !text-white',
                    ),
                })}
            />
        </p>
    )
}
