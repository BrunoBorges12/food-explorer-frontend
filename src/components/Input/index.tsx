/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { Input as InputAntd } from 'antd'
import { tv } from 'tailwind-variants'
import { InputPassword } from './Components/InputPassword'
import { propsInput } from './@types/input'
import cls from 'classnames'
import { Controller, useFormContext } from 'react-hook-form'
import React from 'react'
const input = tv({
    slots: {
        base: '!rounded-lg  font-roboto !text-light-200 !px-[20px] !py-3 item placeholder:!text-light-500 placeholder:!font-roboto ',
    },
})
const { base } = input()

type InputTypeMap = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: React.ComponentType<any>
}
const inputTypeMap: InputTypeMap = {
    password: InputPassword,
    text: InputAntd,
}
export const Input = (props: propsInput) => {
    const {
        control,
        formState: { errors },
    } = useFormContext()
    const InputComponent =
        inputTypeMap[props.type ? props.type : ''] || InputAntd

    const { id, label, background, className, ...rest } = props

    return (
        <p className="flex flex-col gap-2 justify-center text-base">
            <label className="text-light-400 " htmlFor={id}>
                {label}
            </label>
            {id && (
                <Controller
                    control={control}
                    name={id}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <InputComponent
                            {...rest}
                            onChange={onChange} // send value to hook form
                            onBlur={onBlur} // notify when input is touched/blur
                            selected={value}
                            className={base({
                                className: cls(
                                    background
                                        ? props.background
                                        : '!bg-dark-900', //verifica se tem background caso nao tenha ele usa default dark-900
                                    className,
                                ),
                            })}
                        />
                    )}
                />
            )}
            {errors && (
                <span className="text-red-500 font-poppins  text-sm">
                    {id && (errors[id]?.message as any)}
                </span>
            )}{' '}
        </p>
    )
}

Input.displayName = 'Input'
