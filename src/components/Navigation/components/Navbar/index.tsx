'use client'
import { Button } from '@/components/Button'
import InputSearch from '../InputSearch'
import Ticket from '../Icons/Ticket'
import React, { useContext } from 'react'
import { GoSignOut } from 'react-icons/go'
import { Logo } from '@/components/Logo'
import { CartContext } from '@/context/cart'

export const Navbar = () => {
    const { data } = useContext(CartContext)
    return (
        <>
            <div className="lg:pt-1 ">
                <Logo size="small" color="primary" />
            </div>
            <div className=" hidden items-center  lg:gap-16 lg:flex">
                <div className="pb-2">
                    <InputSearch />
                </div>
                <div>
                    <Button
                        icon={<Ticket />}
                        label={`Pedidos (${data.cart.length}) `}
                    />
                </div>
                <div className="text-white">
                    <GoSignOut className="w-8 h-8" />
                </div>
            </div>
            <div className="lg:hidden">
                <Ticket />
            </div>
        </>
    )
}
