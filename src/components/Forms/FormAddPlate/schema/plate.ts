import { z } from 'zod'

export const plateZod = z.object({
    name: z.string({ message: 'por favor insira o nome do prato' }),
    category: z.string(),
    tags: z.array(z.string()),
    price: z.string().default('00'),
    file: z.instanceof(File),
})
