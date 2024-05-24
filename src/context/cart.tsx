'use client'

import { IProductQuantity } from '@/@types/product'
import addProductToCart from '@/utils/addProductToCart'
import React, { Dispatch, createContext, useReducer } from 'react'

type propsCartProvider = {
    children: React.ReactNode
}
interface cartContext {
    data: { cart: IProductQuantity[] }
    dispatch: Dispatch<{ type: string; product: IProductQuantity }>
}
const initialState = { cart: [] }

export const CartContext = createContext<cartContext>({
    dispatch: () => {},
    data: initialState,
})

const reducer = (
    state: { cart: IProductQuantity[] },
    action: { type: string; product: IProductQuantity },
) => {
    const product = action.product
    switch (action.type) {
        case 'addCart':
            return { cart: addProductToCart(state, product) }
        default:
            return { cart: state.cart }
    }
}
export const CartProvider = ({ children }: propsCartProvider) => {
    const [data, dispatch] = useReducer(reducer, initialState)
    return (
        <CartContext.Provider value={{ data: data, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}
