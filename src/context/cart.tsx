'use client'

import { ProductWithQuantity } from '@/@types/product'
import { act, createContext, useReducer } from 'react'

export const CartContext = createContext()

function addProductToCart(
    state: { cart: ProductWithQuantity[] },
    product: ProductWithQuantity,
) {
    state.cart
    const productIndex = state.cart.findIndex(
        (productCart) => productCart.id === product.id,
    )
    if (productIndex > -1) {
        state.cart[productIndex]['quantity'] = product.quantity
        return [...state.cart]
    }
    return [...state.cart, product]
}
const reducer = (
    state,
    action: { type: string; product: ProductWithQuantity },
) => {
    const product = action.product
    switch (action.type) {
        case 'addCart':
            return { cart: addProductToCart(state, product) }
    }
}
export const CartProvider = ({ children }) => {
    const [data, dispatch] = useReducer(reducer, { cart: [] })
    console.log(data)
    return (
        <CartContext.Provider value={{ teste: '1', dispatch: dispatch }}>
            {' '}
            {children}
        </CartContext.Provider>
    )
}
