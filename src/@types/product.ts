export type IProduct = {
    id: number
    name: string
    description: string
    price: string
    img: string
}

export interface IProductQuantity extends IProduct {
    quantity: number
}
