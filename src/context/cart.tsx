'use client'

import { IProductQuantity } from '@/@types/product'
import addProductToCart from '@/utils/addProductToCart'
import getStoredCartItems from '@/utils/getStoredCartItems'
import React, { Dispatch, createContext, useEffect, useReducer } from 'react'

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
    action: {
        type: string
        product?: IProductQuantity
        products?: IProductQuantity[]
    },
) => {
    switch (action.type) {
        case 'addCart':
            const product = action?.product
            return product
                ? { cart: addProductToCart(state, product) }
                : { cart: [] }
        case 'INIT_CART':
            const products = action?.products
            return products ? { cart: products } : { cart: [] }
        default:
            return { cart: state.cart }
    }
}
export const CartProvider = ({ children }: propsCartProvider) => {
    const [data, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        const storedCartItems = getStoredCartItems()
        if (storedCartItems.length > 0) {
            dispatch({
                type: 'INIT_CART',
                products: storedCartItems,
            })
        }
    }, [])
    return (
        <CartContext.Provider value={{ data: data, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}
