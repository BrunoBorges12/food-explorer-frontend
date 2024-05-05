/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormProvider, UseFormReturn } from 'react-hook-form'

type propsForm = {
    methods: UseFormReturn<any>
    children: React.ReactNode
}
export const Form = ({ methods, children }: propsForm) => {
    return <FormProvider {...methods}>{children}</FormProvider>
}
