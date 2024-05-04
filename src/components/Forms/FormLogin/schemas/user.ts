import { z, ZodType } from 'zod' // Add new import
interface User {
    email: string
    password: string
}
export type propUserInput = User
export type propsRegisterInput = {
    name: string
} & User
export const UserSchema: ZodType<propUserInput> = z.object({
    email: z.string().email({
        message:
            'O endereço de email inserido é inválido. Por favor, insira um endereço de email válido.',
    }),
    password: z
        .string()
        .min(8, { message: 'Senha deve conter no mínimo 6 caracteres.' })
        .max(20, {
            message: 'Senha não pode exceder 20 caracteres, é muito longa.',
        }),
})
export const RegisterSchema: ZodType<propsRegisterInput> = z.object({
    email: z.string().email({
        message:
            'O endereço de email inserido é inválido. Por favor, insira um endereço de email válido.',
    }),
    password: z
        .string()
        .min(8, { message: 'Senha deve conter no mínimo 6 caracteres.' })
        .max(20, {
            message: 'Senha não pode exceder 20 caracteres, é muito longa.',
        }),
    name: z.string({ message: 'Por favor insira o nome' }),
})
