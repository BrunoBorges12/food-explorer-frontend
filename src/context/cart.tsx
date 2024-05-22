'use client'

import { data } from '@/components/Products/components/mock/data'
import { createContext, useReducer, useState } from 'react'

export const CartContext = createContext()
const reducer = (state, action) => {
    console.log(state)
    switch (action.type) {
        case 'addCart':
            return { cart: [state.product] }
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
