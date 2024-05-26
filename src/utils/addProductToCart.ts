import { IProductQuantity } from '@/@types/product'

export default function addProductToCart(
    state: { cart: IProductQuantity[] },
    product: IProductQuantity,
) {
    //retorna  um array de valores
    const cartStorage = state.cart
    const productIndex = cartStorage.findIndex(
        (productCart) => productCart.id === product.id,
    )

    if (productIndex > -1) {
        cartStorage[productIndex].quantity = product.quantity
    } else {
        cartStorage.push(product)
    }

    localStorage.setItem('cartItems', JSON.stringify(cartStorage))

    return cartStorage
}
