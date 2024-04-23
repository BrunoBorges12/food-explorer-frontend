import { Button as ButtonAntd } from 'antd'
import { BaseButtonProps } from 'antd/es/button/button'
import cls from 'classnames'
import React from 'react'
interface Button {
    background?: 'tomato-200' | 'tomato-300'
    label: string
    checkout?: string
}
type PropsButton = React.ComponentPropsWithoutRef<'button'> &
    Button &
    BaseButtonProps
export const Button = (props: PropsButton) => {
    return (
        <ButtonAntd
            {...props}
            className={cls(
                '!bg-tomato-200 !rounded-sm px-8 !py-5 !border-none !flex items-center justify-center',
                props.className,
                props.background || 'tomato-100',
            )}
        >
            <span className="text-light-100 text-center font-poppins  !text-sm   flex  gap-10">
                <span>{props.label}</span>
                {props.checkout && <span className="ml-1">( 1 )</span>}
            </span>
        </ButtonAntd>
    )
}
