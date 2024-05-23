export type productType = {
    id: number
    name: string
    description: string
    price: string
    img: string
}

export interface ProductWithQuantity extends productType {
    quantity: number
}
