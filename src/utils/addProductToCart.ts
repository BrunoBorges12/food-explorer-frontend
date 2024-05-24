import { IProductQuantity } from '@/@types/product'

export default function addProductToCart(
    state: { cart: IProductQuantity[] },
    product: IProductQuantity,
) {
    const productIndex = state.cart.findIndex(
        (productCart) => productCart.id === product.id,
    )
    if (productIndex > -1) {
        state.cart[productIndex]['quantity'] = product.quantity
        return [...state.cart]
    }
    return [...state.cart, product]
}
