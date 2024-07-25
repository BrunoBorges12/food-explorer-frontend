'use client'
import { Button } from '@/components/Button'
import InputSearch from '../InputSearch'
import Ticket from '../Icons/Ticket'
import React, { useContext } from 'react'
import { GoSignOut } from 'react-icons/go'
import { Logo } from '@/components/Logo'
import { CartContext } from '@/context/cart'
import { signOut, useSession } from 'next-auth/react'

export const Navbar = () => {
    const { data: session } = useSession()

    const { data } = useContext(CartContext)
    return (
        <>
            <div className="lg:pt-1 ">
                <Logo size="small" color="primary" admin={session?.admin} />
            </div>
            <div className=" hidden items-center  lg:gap-16 lg:flex">
                <div className="pb-2">
                    <InputSearch />
                </div>
                <div>
                    {session?.admin ? (
                        <Button label="Novo Prato" />
                    ) : (
                        <Button
                            icon={<Ticket />}
                            label={`Pedidos (${data.cart.length}) `}
                        />
                    )}
                </div>
                <div className="text-white">
                    <GoSignOut
                        onClick={() => signOut()}
                        className="w-8 h-8 cursor-pointer"
                    />
                </div>
            </div>
            <div className="lg:hidden">
                <Ticket />
            </div>
        </>
    )
}
